import { Graphic } from "./Graphic";

export class CompoundGraphic implements Graphic {
  private children: Array<Graphic> = [];

  move(x: number, y: number): void {
    for (const child of this.children) {
      child.move(x, y);
    }
  }

  draw(): void {
    for (const child of this.children) {
      child.draw();
    }
  }

  add(component: Graphic) {
    this.children.push(component);
  }
}