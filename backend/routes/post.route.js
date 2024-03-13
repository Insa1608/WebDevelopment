const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');

//index
postRoute.route('/').get((req, res) => {
    PostModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//create post
postRoute.route('/add').post((req, res, next) => {
    PostModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = postRoute;