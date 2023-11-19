import { Sofa } from "./contracts/Sofa";

export class RetroSofa extends Sofa {
  constructor() {
    super();
    this.height = 140;
    this.width = 210;
    this.depth = 60;
  }
}
