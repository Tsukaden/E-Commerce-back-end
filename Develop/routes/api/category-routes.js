const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err))
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.json(category))
  .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req, body, {
    where: {id: req.params.id},
  })
  .then(() => {
    return Category.findByPk(req.params.id);
  })
  .then((category) => res.json(category))
  .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
  .then(() => res.json({message: "deleted"}))
  .catch((err) => res.status(500).json(err));
});

module.exports = router;
