const express = require('express');
const router = new express.Router();
const courseModel = require('../model/courseModel')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// get operation
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await courseModel.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('DATA NOT FOUND');
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await courseModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('DATA NOT FOUND');
    }
});

//  post operation
router.post('/add', async (req, res) => {
    try {
        const data = await courseModel.create(req.body);
        res.status(201).send('Successfully added');
    } catch (error) {
        res.status(400).send('post unsuccessfull');
    }
});

//  put operation
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await courseModel.findByIdAndUpdate(id, req.body);
        res.status(200).send('Successfully updated');
    } catch (error) {
        res.status(400).send('update unsuccessfull');
    }
});

//   delete operation
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await courseModel.findByIdAndDelete(id, req.body);
        res.status(200).send('Successfully deleted');
    } catch (error) {
        res.status(400).send('delete unsuccessfull');
    }
});











module.exports = router;