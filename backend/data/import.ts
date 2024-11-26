import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "./products.csv");

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const products = data.split("\n").slice(1).map((line) => {
        const [ProductID, ProductName, Category, Price] = line.split(",");
        return {
            ProductID: parseInt(ProductID, 10),
            ProductName: ProductName || null,
            Category: Category || null,
            Price: Price ? parseFloat(Price) : null,
        };
    }).filter((product) => {
        return (
            product.ProductName &&
            product.Category &&
            product.Price !== null &&
            !isNaN(product.Price)
        );
    });

    console.log(products);
});
