import express from 'express';
import Sale from '../models/sale';
import Product from '../models/product';

const router = express.Router();

//  all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});  
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
});


// Total Sales
router.get('/total_sales', async (req, res) => {
  const { startDate, endDate } = req.query;
  const sales = await Sale.aggregate([
    {
      $match: {
        Date: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) },
      },
    },
    {
      $group: {
        _id: null,
        totalSales: { $sum: '$TotalAmount' },
      },
    },
  ]);
  res.json(sales[0]?.totalSales || 0);
});

// Trending Products
router.get('/trending_products', async (req, res) => {
  const trending = await Sale.aggregate([
    {
      $group: {
        _id: '$ProductID',
        totalQuantity: { $sum: '$Quantity' },
        totalSales: { $sum: '$TotalAmount' },
      },
    },
    { $sort: { totalQuantity: -1 } },
    { $limit: 3 },
  ]);
  const products = await Product.find({
    ProductID: { $in: trending.map((t) => t._id) },
  });
  res.json(
    trending.map((t) => ({
      product: products.find((p) => p.ProductID === t._id),
      totalQuantity: t.totalQuantity,
      totalSales: t.totalSales,
    }))
  );
});


// Sales by Category
router.get('/category_sales', async (req, res) => {
  const sales = await Sale.aggregate([
    {
      $lookup: {
        from: 'products',
        localField: 'ProductID',
        foreignField: 'ProductID',
        as: 'product',
      },
    },
    { $unwind: '$product' },
    {
      $group: {
        _id: '$product.Category',
        totalSales: { $sum: '$TotalAmount' },
        totalQuantity: { $sum: '$Quantity' },
      },
    },
  ]);
  const totalSales = sales.reduce((sum, s) => sum + s.totalSales, 0);
  res.json(
    sales.map((s) => ({
      category: s._id,
      totalSales: s.totalSales,
      percentage: ((s.totalSales / totalSales) * 100).toFixed(2),
    }))
  );
});

export default router;