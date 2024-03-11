const express = require('express');
const postRoute = express.Router();

let PostModel = require('../models/Post');

//create post
postRoute.route('/addemployees').post((req, res, next) => {
    PostModel.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});

module.export = postRoute;