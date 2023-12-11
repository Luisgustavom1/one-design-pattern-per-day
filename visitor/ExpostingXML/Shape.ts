import { Visitor } from "./Visitor";

export interface Shape {
  move(x: number, y: number): void;
  draw(): void;
  accept(visitor: Visitor): string;
}