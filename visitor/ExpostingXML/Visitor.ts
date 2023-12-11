import { Circle } from "./Circle";
import { CompoundShape } from "./CompoundShape";
import { Dot } from "./Dot";
import { Rectangle } from "./Rectangle";

export interface Visitor {
  visitDot: (dot: Dot) => string;
  visitCircle: (circle: Circle) => string;
  visitRectangle: (rectangle: Rectangle) => string;
  visitCompoundGraphic: (compoundShape: CompoundShape) => string;
}
