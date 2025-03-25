const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: "Ropa de playa",
    price: 500
  });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "Limpieza",
    products: 12
  });
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  })
});

module.exports = router;
