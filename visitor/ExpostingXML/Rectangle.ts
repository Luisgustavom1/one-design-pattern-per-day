import { Visitor } from "./Visitor";
import { Shape } from "./Shape";


export class Rectangle implements Shape {
  constructor(
    private id: number,
    private x: number,
    private y: number,
    private width: number,
    private height: number
  ) { }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log("Draw rectangle in ", this.x, this.y);
  }

  accept(visitor: Visitor): string {
    return visitor.visitRectangle(this);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getId() {
    return this.id;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
