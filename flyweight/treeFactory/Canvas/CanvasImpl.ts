import { Canvas } from "./Canvas";

export class CanvasImpl implements Canvas {
  public fillStyle?: string;

  constructor () {}

  fillRect(x: number, y: number, width: number, height: number): void {
    console.log(`Drawing a rectangle at (${x}, ${y}) with width ${width} and height ${height} with color ${this.fillStyle}`)
  }
}