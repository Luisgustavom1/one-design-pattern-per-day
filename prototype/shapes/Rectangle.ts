import { Shape } from "./Shape";

export class Rectangle extends Shape {
  public width?: number;
  public height?: number;

  constructor(target?: Rectangle) {
    super(target);
    if (target) {
      this.width = target.width;
      this.height = target.height;
    }
  }

  public clone(): Shape {
    return new Rectangle(this);
  }

  public equals(obj: Object) {
    if (!(obj instanceof Rectangle) && !super.equals(obj)) return false;
    const rectangle = obj as Rectangle;
    return rectangle.width === this.width && rectangle.height === this.height;
  }
}