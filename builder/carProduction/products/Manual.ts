import { CarType } from "./CarType";
import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";

export class Manual {
  constructor (
    private carType: CarType,
    private seats: number,
    private engine: Engine,
    private transmission: Transmission,
    private tripComputer: TripComputer,
    private gpsNavigator: GPSNavigator,
  ) {}

  public print() {
    let info = "";
    info += "Type of car: " + this.carType + "\n";
    info += "Count of seats: " + this.seats + "\n";
    info += "Engine: volume - " + this.engine.getVolume() + "; mileage - " + this.engine.getMileage() + "\n";
    info += "Transmission: " + this.transmission + "\n";
    if (this.tripComputer) {
        info += "Trip Computer: Functional" + "\n";
    } else {
        info += "Trip Computer: N/A" + "\n";
    }
    if (this.gpsNavigator) {
        info += "GPS Navigator: Functional" + "\n";
    } else {
        info += "GPS Navigator: N/A" + "\n";
    }
    return info;
}
}