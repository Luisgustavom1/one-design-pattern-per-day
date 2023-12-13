export class Engine {
  private started: boolean = false;

  constructor(
    private volume: number,
    private mileage: number,
  ) {}

  on() {
    this.started = true;
  }

  off() {
    this.started = false;
  }

  isStarted() {
    return this.started;
  }

  go(mileage: number) {
    if (this.started) {
      this.mileage += mileage;
      return;
    }
    console.log("Cannot go(), you must start engine first!");
  }

  getVolume() {
    return this.volume;
  }

  getMileage() {
    return this.mileage;
  }
}
