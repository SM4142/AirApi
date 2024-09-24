"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAirSelectedDate = exports.getAir = void 0;
const axios_1 = __importDefault(require("axios"));
const getAir = async (req, res) => {
    try {
        const response = await axios_1.default.get("https://api.schiphol.nl/public-flights/flights", {
            headers: {
                ResourceVersion: "v4",
                app_id: "d99141ad",
                app_key: "9c1412e1fa5f7f826b558ca42e59d314",
            },
        });
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
exports.getAir = getAir;
const getAirSelectedDate = async (req, res) => {
    try {
        const { from, to } = req.params;
        if (!from && !to) {
            return res.status(400).send("from and to are required");
        }
        const params = {};
        if (from) {
            params.fromScheduleDate = from;
        }
        if (to) {
            params.toScheduleDate = to;
        }
        const response = await axios_1.default.get("https://api.schiphol.nl/public-flights/flights", {
            headers: {
                ResourceVersion: "v4",
                app_id: "d99141ad",
                app_key: "9c1412e1fa5f7f826b558ca42e59d314",
            },
            params: params,
        });
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
exports.getAirSelectedDate = getAirSelectedDate;
