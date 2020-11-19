"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../model/models");

var _fences = require("../model/fences");

var _textures = require("../model/textures");

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as fs from'fs';
var router = _express["default"].Router();
/* GET home page. */


router.get("/", function (req, res, next) {
  //   res.render('index', { title: 'Express' });
  // res.send("Hello")
  res.status(200).json({
    status: "request successful"
  });
});
router.get("/textures", function (req, res, next) {
  res.status(200).json({
    title: "List of textures",
    data: _textures.textures
  });
});
router.get("/models", function (req, res, next) {
  res.status(200).json({
    title: "List of models",
    data: _models.models
  });
});
router.get("/fences", function (req, res, next) {
  res.status(200).json({
    title: "fences",
    data: _fences.fences
  });
});
router.get("/models/:id", function (req, res, next) {
  res.status(200).json({
    title: "fetching information about model ".concat(req.params.id)
  });
});
router.post("/save", function (req, res, next) {
  console.log(req.body);

  _fs.promises.writeFile("".concat(req.body.name, ".babylon"), JSON.stringify(req.body.data)).then(function (out) {
    res.status(200).json({
      okay: "".concat(req.body.name, ".babylon saved")
    });
  })["catch"](function (err) {
    res.status(400).json({
      error: err
    });
  });
});
router.get("/open/:fname", function (req, res, next) {
  var fname = req.params.fname;

  _fs.promises.readFile("".concat(fname), "utf-8").then(function (data) {
    res.status(200).send(data);
  })["catch"](function (err) {
    res.status(400).json({
      "error": err
    });
  });
});
var _default = router;
exports["default"] = _default;