import { Shape } from "./Shape";
import { Visitor } from "./Visitor";

export class CompoundShape implements Shape {
  private children: Array<Shape> = [];

  constructor(
    private id: number,
  ) {}

  move(x: number, y: number): void {
    for (const shape of this.children) {
      shape.move(x, y);
    }
  }

  draw(): void {
    for (const shape of this.children) {
      shape.draw();
    }
  }

  accept(visitor: Visitor): string {
    return visitor.visitCompoundGraphic(this);
  }

  add(shape: Shape) {
    this.children.push(shape);
  }

  getId() {
    return this.id;
  }

  getChildren() {
    return this.children;
  }
}