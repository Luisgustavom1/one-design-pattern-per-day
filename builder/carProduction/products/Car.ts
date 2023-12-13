import { CarType } from "./CarType";
import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";

export class Car {
  private fuel: number = 0;

  constructor (
    private carType: CarType,
    private seats: number,
    private engine: Engine,
    private transmission: Transmission,
    private tripComputer: TripComputer,
    private gpsNavigator: GPSNavigator,
  ) {
    if (tripComputer) {
      this.tripComputer.setCar(this);
    }
  }

  public getCarType() {
    return this.carType;
  }

  public getFuel() {
    return this.fuel;
  }

  public setFuel(fuel: number) {
    this.fuel = fuel;
  }

  public getSeats() {
    return this.seats;
  }

  public getEngine() {
    return this.engine;
  }

  public getTransmission() {
    return this.transmission;
  }

  public getTripComputer() {
    return this.tripComputer;
  }

  public getGpsNavigator() {
    return this.gpsNavigator;
  }
}