export class GPSNavigator {
  private route: string;

  constructor (manualRoute?: string) {
    this.route = manualRoute ||  "221b, Baker Street, London  to Scotland Yard, 8-10 Broadway, London";
  }

  getRoute() {
    return this.route;
  }
}
