import express from 'express';
import cors from 'cors';
import connectDB from './database';
import analyticsRoutes from './routes/analytics';
import productRoutes from './routes/products';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/analytics', analyticsRoutes);
app.use('/products', productRoutes);

export default app;