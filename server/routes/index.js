import express from 'express';
import { models } from '../model/models';
import { fences } from '../model/fences';
import { textures } from '../model/textures'

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

export default router;