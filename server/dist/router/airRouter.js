"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const airController_1 = require("../controller/airController");
const airRouter = require("express").Router();
airRouter.get("/", airController_1.getAir);
airRouter.get("/airDate/:from/:to", airController_1.getAirSelectedDate);
exports.default = airRouter;
