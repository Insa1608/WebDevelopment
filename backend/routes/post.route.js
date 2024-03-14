const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');

//index
postRoute.route('/').get((req, res) => {
    PostModel.find().then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        res.status(500).json(error)
    })
})

postRoute.get('/add', async (req, res) => {
    try {
        const addemployee = await PostModel.find()
        if (!addemployee) throw new Error('Nothing found!')
        res.status(200).json(addemployee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

postRoute.post('/add', async (req, res) => {
    const newemployee = new PostModel(req.body)
    try {
        const employee = await newemployee.save()
        if (!employee) throw new Error('Something went wrong saving the employee')
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

postRoute.delete('/add/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await PostModel.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = postRoute;