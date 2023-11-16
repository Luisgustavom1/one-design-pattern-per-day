import { Graphic } from "./Graphic";

export class Dot implements Graphic {
  constructor(
    public x: number,
    public y: number,
  ) {}

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log(`Draw the Dots -> x: ${this.x} y: ${this.y}`)
  }
}