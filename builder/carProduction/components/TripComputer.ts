import { Car } from "../products/Car";

export class TripComputer {
  private car?: Car;

  setCar(car: Car) {
    this.car = car;
  }

  showFuelLevel() {
    console.log("Fuel level: ", this.car?.getFuel());
  }

  showStatus() {
    if (this.car?.getEngine().isStarted()) {
      console.log("Car is started");
      return;
    }
    console.log("Car isn`t started");
  }
}
