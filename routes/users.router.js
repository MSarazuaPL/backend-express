const UsersService = require('./../services/user.service')
const express = require('express');
const router = express.Router();
const service = new UsersService();

// QUERY PARAMS

router.get('/', (req, res) => {
  const user = service.find();
  res.json(user);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json({
    newUser
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateUser = service.update(id, body);
  res.json({
    updateUser
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedUser = service.delete(id);
  res.json({
    deletedUser
  })
})

module.exports = router;
