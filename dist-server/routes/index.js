"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var itemData = [{
  id: 1,
  name: "Bandstand",
  notes: "Imported from blender",
  path: "/models/",
  file: "bandstand.babylon",
  thumb: "/img/thumb/models/bandstand.png"
}, {
  id: 2,
  name: "bench",
  notes: "A picnic bench",
  path: "/models/",
  file: "bench.babylon",
  thumb: "/img/thumb/models/bench.png"
}, {
  id: 3,
  name: "Tree 12m",
  notes: "Imported from blender",
  path: "/models/",
  file: "tree12m.babylon",
  thumb: "/img/thumb/models/tree.png"
}, {
  id: 5,
  name: "Tree 8m",
  notes: "A picnic bench",
  path: "/models/",
  file: "tree8m.babylon",
  thumb: "/img/thumb/models/tree.png"
}, {
  id: 6,
  name: "Tree 6m",
  notes: "Imported from blender",
  path: "/models/",
  file: "tree6m.babylon",
  thumb: "/img/thumb/models/tree.png"
}, {
  id: 7,
  name: "Shed 1",
  notes: "A simple shed",
  path: "/models/",
  file: "shed1.babylon",
  thumb: "/img/thumb/models/shed1.png"
}, {
  id: 8,
  name: "Dennis",
  notes: "Imported from clara.io",
  path: "/models/",
  file: "dennis-posed-004.babylon",
  thumb: "/img/thumb/models/dennis.png"
}, {
  id: 9,
  name: "Male",
  notes: "A picnic bench",
  path: "/models/male/",
  file: "male.babylon",
  thumb: "/img/thumb/models/bench.png"
}, {
  id: 10,
  name: "Bandstand",
  notes: "Imported from blender",
  path: "/models/",
  file: "bandstand.babylon",
  thumb: "/img/thumb/models/bandstand.png"
}, {
  id: 12,
  name: "Bench",
  notes: "A picnic bench",
  path: "/models/",
  file: "bench.babylon",
  thumb: "/img/thumb/models/bench.png"
}, {
  id: 13,
  name: "Bandstand",
  notes: "Imported from blender",
  path: "/models/",
  file: "bandstand.babylon",
  thumb: "/img/thumb/models/bandstand.png"
}, {
  id: 15,
  name: "Bench",
  notes: "A picnic bench",
  path: "/models/",
  file: "bench.babylon",
  thumb: "/img/thumb/models/bench.png"
}, {
  id: 16,
  name: "Bandstand",
  notes: "Imported from blender",
  path: "/models/",
  file: "bandstand.babylon",
  thumb: "/img/thumb/models/bandstand.png"
}, {
  id: 17,
  name: "Bench",
  notes: "A picnic bench",
  path: "/models/",
  file: "bench.babylon",
  thumb: "/img/thumb/models/bench.png"
}, {
  id: 18,
  name: "Bandstand",
  notes: "Imported from blender",
  path: "/models/",
  file: "bandstand.babylon",
  thumb: "/img/thumb/models/bandstand.png"
}, {
  id: 19,
  name: "Bench",
  notes: "A picnic bench",
  path: "/models/",
  thumb: "/img/thumb/models/bench.png"
}];
var textures = [{
  id: 1,
  name: "bark",
  notes: "landscape bark",
  path: "/textures/ground/",
  file: "bark.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/bark.jpg"
}, {
  id: 2,
  name: "grass001",
  notes: "A lawn",
  path: "/textures/ground/",
  file: "grass001.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass001.jpg"
}, {
  id: 3,
  name: "gravel1",
  notes: "gravel",
  path: "/textures/ground/",
  file: "gravel1.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/gravel1.jpg"
}, {
  id: 4,
  name: "patio",
  notes: "Grey blockwork patio",
  path: "/textures/ground/",
  file: "patio1.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/patio1.jpg"
}, {
  id: 5,
  name: "wood",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "wood.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/wood.jpg"
}, {
  id: 6,
  name: "grass002",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "grass002.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass002.jpg"
}, {
  id: 7,
  name: "grass003",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "grass003.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass003.jpg"
}, {
  id: 8,
  name: "grass004",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "grass004.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass004.jpg"
}, {
  id: 9,
  name: "grass005",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "grass005.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass005.jpg"
}, {
  id: 10,
  name: "grass006",
  notes: "Wood!",
  path: "/textures/ground/",
  file: "grass006.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/grass006.jpg"
}, {
  id: 11,
  name: "soil1",
  notes: "soil",
  path: "/textures/ground/",
  file: "soil1.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/soil1.jpg"
}, {
  id: 12,
  name: "soil2",
  notes: "soil",
  path: "/textures/ground/",
  file: "soil2.jpg",
  uScale: 1,
  vScale: 1,
  thumb: "/img/thumb/textures/soil2.jpg"
}];
/* GET home page. */

router.get('/', function (req, res, next) {
  //   res.render('index', { title: 'Express' });
  // res.send("Hello")
  res.status(200).json({
    "status": "request successful"
  });
});
router.get('/textures', function (req, res, next) {
  res.status(200).json({
    "title": "textures",
    "data": textures
  });
});
router.get('/models', function (req, res, next) {
  res.status(200).json({
    "title": "return to you a list of models!",
    "data": itemData
  });
  console.log("sending list of models!");
});
router.get('/models/:id', function (req, res, next) {
  res.status(200).json({
    "title": "fetching information about model ".concat(req.params.id)
  });
  console.log("fetching information for model ", req.params.id);
});
var _default = router;
exports["default"] = _default;