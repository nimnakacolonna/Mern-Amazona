import express from 'express';
import data from '../data.js';
import Products from '../modules/ProdModule.js';
import User from '../modules/UserModel.js';

const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Products.deleteMany({});
  const createdProducts = await Products.insertMany(data.products);

  await User.deleteMany({});
  const createdUser = await User.insertMany(data.users);

  res.send({ createdProducts, createdUser });
});

export default SeedRouter;
