const { Product } = require("../models");

const productData = [
  {
    product_name: "White T-Shirt",
    price: 14.99,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: "Nike Running Shoes",
    price: 200.0,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: "Yankees Baseball Hat",
    price: 22.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: "DMX- Flesh of my Flesh, Blood of my Blood",
    price: 12.99,
    stock: 50,
    category_id: 2,
  },
  {
    product_name: "Adidas Shorts",
    price: 29.99,
    stock: 22,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
