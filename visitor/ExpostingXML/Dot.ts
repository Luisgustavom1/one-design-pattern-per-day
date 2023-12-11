import { Shape } from "./Shape";
import { Visitor } from "./Visitor";


export class Dot implements Shape {
  constructor(
    private id: number,
    private x: number,
    private y: number
  ) { }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log("Draw dot in ", this.x, this.y);
  }

  accept(visitor: Visitor): string {
    return visitor.visitDot(this);
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
}
