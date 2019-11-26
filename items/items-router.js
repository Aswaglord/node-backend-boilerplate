const router = require('express').Router();

const Items = require('./items-model.js');

router.get('/', (req, res) => {
  Items.find()
    .then(items => {
      res.status(200).json(items)
    })
    .catch(err => {
      res.status(500).json({message: 'Error retrieving the items.'})
      console.log(err)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Items.findById(id)
    .then(item => {
      res.status(200).json(item)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the item.' })
      console.log(err)
    })
})

router.post('/', (req, res) => {
  const item = req.body
  Items.add(item)
    .then(response => {
      res.status(201).json(item)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the item.' })
    })
})

module.exports = router;