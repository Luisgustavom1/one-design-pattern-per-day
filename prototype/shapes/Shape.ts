export abstract class Shape {
  public x?: number;
  public y?: number;
  public color?: string;

  constructor(target?: Shape) {
    if (target) {
      this.x = target.x;
      this.y = target.y;
      this.color = target.color;
    }
  }

  public abstract clone(): Shape;

  public equals(obj: Object) {
    if (!(obj instanceof Shape)) return false;
    const shape = obj as Shape;
    return shape.x === this.x && shape.y === this.y && shape.color === this.color;
  }
}