import { Coordinate } from "./Coordinate";
import { Route } from "./Route";

export class RoadStrategy implements Route {
  buildRoute(a: Coordinate, b: Coordinate): void {
    console.log("Road strategy ", a, " --> ", b)
  }
}