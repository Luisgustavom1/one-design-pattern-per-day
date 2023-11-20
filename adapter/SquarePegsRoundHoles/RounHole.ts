import { RoundPeg } from "./RoundPeg";

export class RoundHole {
  constructor(
    private readonly radius: number,
  ) {}

  getRadius() {
    return this.radius;
  }

  fits(peg: RoundPeg) {
    return this.getRadius() >= peg.getRadius();
  }
}