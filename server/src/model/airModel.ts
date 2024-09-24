import mongoose, { Model, Schema } from "mongoose";

const airSchema: Schema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  flight_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  route: {
    type: { destinations: [String] },
    required: true,
  },
  publicFlightState: {
    type: { flightState: String },
    required: true,
  },
});

export const airPlane: Model<airPLaneInterafaces> =
  mongoose.model<airPLaneInterafaces>("airPlane", airSchema);
