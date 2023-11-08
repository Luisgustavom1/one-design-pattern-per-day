import { Coordinate } from "./Coordinate";
import { Route } from "./Route";

export class Navigator {
  private strategy?: Route = undefined;

  public navigate(a: Coordinate, b: Coordinate): void {
    const strategy = this.strategy
    if (!strategy) throw new Error("First set a strategy")
    strategy.buildRoute(a, b)
  }

  public setStrategy(s: Route) {
    this.strategy = s
  }
}