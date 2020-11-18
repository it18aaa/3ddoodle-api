import express from 'express';
import {
    models
} from '../model/models';
import {
    fences
} from '../model/fences';
import {
    textures
} from '../model/textures'
// import * as fs from'fs';

import {
    promises as fs
} from 'fs';


const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //   res.render('index', { title: 'Express' });
    // res.send("Hello")
    res.status(200).json({
        "status": "request successful"
    });
});


router.get('/textures', (req, res, next) => {
    res.status(200).json({
        "title": "List of textures",
        "data": textures
    })
})

router.get('/models', (req, res, next) => {
    res.status(200).json({
        "title": "List of models",
        "data": models
    });
});


router.get('/fences', (req, res, next) => {
    res.status(200).json({
        "title": "fences",
        "data": fences
    })
})

router.get('/models/:id', (req, res, next) => {
    res.status(200).json({
        "title": `fetching information about model ${req.params.id}`
    })
})


router.post('/save', (req, res, next) => {
    console.log(req.body)

    fs.writeFile(`${req.body.name}.babylon`, JSON.stringify(req.body.data))    
        .then(out => {
            res.status(200).json({
                "okay": `${req.body.name}.babylon saved`
            });
        })
        .catch(err => {
            res.status(400).json({
                "error": err
            })
        })
})

router.get('/open/:fname', (req, res, next) => {
    const fname = req.params.fname;

    fs.readFile(`${fname}.babylon`, 'utf-8')
        .then(data => {
            res.status(200).json({
                "message": `${fname}.babylon`,
                data: JSON.parse(data)
            });
        })
        .catch(err => {
            res.status(400).json({
                "error" : err
            });
        });
})

export default router;