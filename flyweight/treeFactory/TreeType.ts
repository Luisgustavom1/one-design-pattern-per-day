import { Canvas } from "./Canvas/Canvas"

// The flyweight class, this fields stores values that are unique fro each tree.
// Wwe can extract texture, color and other repeating data into a separate object
export class TreeType {
  constructor (public name: string, public color: string, public texture: string) {}

  draw (canvas: Canvas, x: number, y: number): void {
    canvas.fillStyle = this.color
    canvas.fillRect(x - 1, y, 3, 5)
  }
}