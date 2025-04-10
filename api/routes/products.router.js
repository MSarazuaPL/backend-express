const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schema/product.schema');
const express = require('express');
const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async(req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    newProduct
  });
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json({
      product
    })
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json({
    product
  })
})

module.exports = router;
