import { Canvas } from "./Canvas/Canvas";
import { TreeType } from "./TreeType";

// This is a contextual object
// It contains the extrinsic part of the tree
export class Tree {
  constructor (public x: number, public y: number, public type: TreeType) {}

  draw (canvas: Canvas): void {
    this.type.draw(canvas, this.x, this.y)
  }
}