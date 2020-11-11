"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../model/models");

var _fences = require("../model/fences");

var _textures = require("../model/textures");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
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
    "title": "List of textures",
    "data": _textures.textures
  });
});
router.get('/models', function (req, res, next) {
  res.status(200).json({
    "title": "List of models",
    "data": _models.models
  });
});
router.get('/fences', function (req, res, next) {
  res.status(200).json({
    "title": "fences",
    "data": _fences.fences
  });
});
router.get('/models/:id', function (req, res, next) {
  res.status(200).json({
    "title": "fetching information about model ".concat(req.params.id)
  });
});
var _default = router;
exports["default"] = _default;