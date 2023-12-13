import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";
import { CarType } from "../cars/CarType";
import { Manual } from "../cars/Manual";
import { Builder } from "./Builder";

export class CarManualBuilder implements Builder {
  private type?: CarType;
  private seats?: number;
  private engine?: Engine;
  private transmission?: Transmission;
  private tripComputer?: TripComputer;
  private gpsNavigator?: GPSNavigator;

  setCarType(type: CarType): void {
    this.type = type;
  }
  setSeats(seats: number): void {
    this.seats = seats;
  }
  setEngine(engine: Engine): void {
    this.engine = engine;
  }
  setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }
  setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }
  setGPSNavigator(gpsNavigator: GPSNavigator): void {
    this.gpsNavigator = gpsNavigator;
  }
  carResult(): Manual {
    const manualComponents = [
      this.type,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gpsNavigator,
    ]

    if (manualComponents.some((el) => !el)) {
      throw new Error("Incomplete manual")
    }

    return new Manual(
      this.type!,
      this.seats!,
      this.engine!,
      this.transmission!,
      this.tripComputer!,
      this.gpsNavigator!,
    )
  }
}