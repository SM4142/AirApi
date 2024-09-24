interface airPLaneInterafaces {
  _id?: string;
  user_id: string;
  flight_id: string;
  name: string;
  route: {
    destinations: string[];
  };
  publicFlightState: {
    flightState: string;
  };
}
