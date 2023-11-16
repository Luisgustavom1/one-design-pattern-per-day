import { Dot } from "./Dot";

export class Circle extends Dot {
  constructor(
    private radius: number,
    x: number,
    y: number,
  ) {
    super(x, y);
  }

  draw() {
    console.log(`Draw the circle -> radius ${this.radius} in ${this.x}, ${this.y}`)
  }
}