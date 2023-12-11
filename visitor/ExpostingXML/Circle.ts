import { Dot } from "./Dot";
import { Visitor } from "./Visitor";


export class Circle extends Dot {
  private radius: number = 0;

  constructor(
    id: number,
    x: number,
    y: number,
    radius: number
  ) {
    super(id, x, y);
    this.radius = radius;
  }

  accept(visitor: Visitor): string {
    return visitor.visitCircle(this);
  }

  getRadius() {
    return this.radius;
  }
}
