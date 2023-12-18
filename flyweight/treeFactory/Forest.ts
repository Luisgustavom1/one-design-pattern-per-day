import { Canvas } from "./Canvas/Canvas";
import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

// flyweight clients
export class Forest {
  trees: Tree[] = [];

  plantTree(x: number, y: number, name: string, color: string, texture: string): void {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas: Canvas): void {
    this.trees.forEach(tree => tree.draw(canvas));
  }
}