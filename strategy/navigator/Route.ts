import { Coordinate } from "./Coordinate";

export interface Route {
  buildRoute(a: Coordinate, b: Coordinate): void
}