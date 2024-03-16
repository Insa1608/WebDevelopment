//express is used here
const express = require('express');
//a router is started
const postRoute = express.Router();
//the schema is imported here
let PostModel = require('../models/Post');

//index Route is defined 
postRoute.route('/').get((req, res) => {
    PostModel.find().then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        res.status(500).json(error)
    })
})

//get route is defined
postRoute.get('/add', async (req, res) => {
    try {
        const addemployee = await PostModel.find()
        if (!addemployee) throw new Error('Nothing found!')
        res.status(200).json(addemployee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//post route is defined
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

//delete route is defined
postRoute.delete('/add/:id', async (req, res) => {
    const query = { _id: req.params.id }
    try {
        const removed = await PostModel.findByIdAndDelete(query)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//module is exported for further use
module.exports = postRoute;