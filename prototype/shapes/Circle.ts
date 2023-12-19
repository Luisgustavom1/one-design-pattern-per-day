import { Shape } from "./Shape";

export class Circle extends Shape {
  public radius?: number;

  constructor(target?: Circle) {
    super(target);
    if (target) {
      this.radius = target.radius;
    }
  }

  public clone(): Shape {
    return new Circle(this);
  }

  public equals(obj: Object) {
    if (!(obj instanceof Circle) && !super.equals(obj)) return false;
    const circle = obj as Circle;
    return circle.radius === this.radius;
  }
}