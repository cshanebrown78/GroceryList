const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// Item Model

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Private

router.get('/', auth, (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create An Item
// @access Private

router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        department: req.body.department,
        quantity: req.body.quantity,
        repeat: req.body.repeat
    });

    newItem.save().then(item => res.json(item));
});

// @route Delete api/items/:id
// @desc Delete An Item
// @access Private

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});


module.exports = router;