import express from 'express';
const router = express.Router();

const data = [{
        id: 1,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 2,
        name: "bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 3,
        name: "Tree 12m",
        notes: "Imported from blender",
        path: "/models/",
        file: "tree12m.babylon",
        thumb: "/img/thumb/models/tree.png"
    },
    {
        id: 5,
        name: "Tree 8m",
        notes: "A picnic bench",
        path: "/models/",
        file: "tree8m.babylon",
        thumb: "/img/thumb/models/tree.png"
    },
    {
        id: 6,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 7,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 8,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 9,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 10,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 12,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 13,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 15,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 16,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 17,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        file: "bench.babylon",
        thumb: "/img/thumb/models/bench.png"
    },
    {
        id: 18,
        name: "Bandstand",
        notes: "Imported from blender",
        path: "/models/",
        file: "bandstand.babylon",
        thumb: "/img/thumb/models/bandstand.png"
    },
    {
        id: 19,
        name: "Bench",
        notes: "A picnic bench",
        path: "/models/",
        thumb: "/img/thumb/models/bench.png"
    }
];

const textures = [{
    id: 1,
    name: "bark",
    notes: "Landscape bark",
    path: "/textures/ground/bark.jpg"
}, {
    id: 2,
    name: "grass001",
    notes: "grass 1",
    path: "/textures/ground/grass001.jpg"

}]

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
        "title": "textures",
        "data": textures
    })
})



router.get('/models', (req, res, next) => {
    res.status(200).json({
        "title": "return to you a list of models!",
        "data": data
    });

    console.log("sending list of models!");
});


router.get('/models/:id', (req, res, next) => {
    res.status(200).json({
        "title": `fetching information about model ${req.params.id}`
    })
    console.log("fetching information for model ", req.params.id)
})

export default router;