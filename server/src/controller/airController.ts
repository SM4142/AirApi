import axios from "axios";
import { Request, Response } from "express";

const getAir = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: "d99141ad",
          app_key: "9c1412e1fa5f7f826b558ca42e59d314",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getAirSelectedDate = async (req: Request, res: Response) => {
  try {
    const { from, to } = req.params;
    if (!from && !to) {
      return res.status(400).send("from and to are required");
    }
    const params: { fromScheduleDate?: string; toScheduleDate?: string } = {};
    if (from) {
      params.fromScheduleDate = from;
    }

    if (to) {
      params.toScheduleDate = to;
    }

    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          ResourceVersion: "v4",
          app_id: "d99141ad",
          app_key: "9c1412e1fa5f7f826b558ca42e59d314",
        },
        params: params,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
export { getAir, getAirSelectedDate };
