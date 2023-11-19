import { Sofa } from "../contracts/Sofa";

export class ClassicSofa extends Sofa {
  constructor(
    height: number,
    width: number,
    depth: number, 
  ) {
    super();
    this.height = height;
    this.width = width;
    this.depth = depth;
  }
}
