export interface AirplaneInterfaces {
  id: string;
  user_id: string;
  flight_id: string;
  name: string;
  route: {
    destinations: string[];
  };
  lastUpdatedAt: string;
  actualLandingTime: string;
  aircraftType: {
    iataMain: string;
    iataSub: string;
  };
  baggageClaim: {
    belts: string[];
  };
  codeshares: string[];
  estimatedLandingTime: string;
  expectedTimeOnBelt: string;
  flightDirection: string;
  flightName: string;
  flightNumber: number;
  isOperationalFlight: boolean;
  mainFlight: string;
  prefixIATA: string;
  prefixICAO: string;
  airlineCode: number;
  publicFlightState: {
    flightStates: string[];
  };
  eu: string;
  visa: boolean;
  scheduleDateTime: string;
  scheduleDate: string;
  scheduleTime: string;
  serviceType: string;
  terminal: number;
  schemaVersion: string;
}
export interface homeInterface {
  data: AirplaneInterfaces[] | null;
}
