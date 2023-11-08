import { Coordinate } from "./Coordinate";
import { Route } from "./Route";

export class WalkingStrategy implements Route {
  buildRoute(a: Coordinate, b: Coordinate): void {
    console.log("walking strategy ", a, " --> ", b)
  }
}