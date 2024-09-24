import express from "express";
import { getAir, getAirSelectedDate } from "../controller/airController";

const airRouter = require("express").Router();

airRouter.get("/", getAir);
airRouter.get("/airDate/:from/:to", getAirSelectedDate);
export default airRouter;
