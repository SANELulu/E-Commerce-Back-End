const { Category } = require("../models");
const CatData = [
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
  {
    category_name: "Shirts",
  },
];

const seedCategories = () => Category.bulkCreate(CatData);

module.exports = seedCategories;
