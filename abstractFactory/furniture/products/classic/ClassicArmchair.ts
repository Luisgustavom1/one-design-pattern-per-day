import { Armchair } from "../contracts/ArmChair";

export class ClassicArmchair extends Armchair {
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
