"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _petsController = require("../../controllers/petsController");

var indexRouter = _express["default"].Router();

indexRouter.get('/', _petsController.petsPage);
indexRouter.get('/pets', _petsController.petsPage);
indexRouter.post('/pet', _petsController.petCreatePage);
indexRouter.get('/pets/:petId', _petsController.petDetailsPage); //indexRouter.get('/pets', petPage);

var _default = indexRouter;
exports["default"] = _default;