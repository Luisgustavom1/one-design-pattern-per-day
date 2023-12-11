import { Circle } from "./Circle";
import { CompoundShape } from "./CompoundShape";
import { Dot } from "./Dot";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Visitor } from "./Visitor";

export class XMLExportVisitor implements Visitor {
  export(...shapes: Array<Shape>): string {
    let str = "";
    str = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "\n";
    for (const shape of shapes) {
      str += shape.accept(this) + "\n";
    }
    return str;
  }

  visitDot(dot: Dot) {
    return "<dot>" + "\n" +
    "    <id>" + dot.getId() + "</id>" + "\n" +
    "    <x>" + dot.getX() + "</x>" + "\n" +
    "    <y>" + dot.getY() + "</y>" + "\n" +
    "</dot>";
  };

  visitCircle(circle: Circle) {
    return "<circle>" + "\n" +
    "    <id>" + circle.getId() + "</id>" + "\n" +
    "    <x>" + circle.getX() + "</x>" + "\n" +
    "    <y>" + circle.getY() + "</y>" + "\n" +
    "    <radius>" + circle.getRadius() + "</radius>" + "\n" +
    "</circle>";
  };

  visitRectangle(rectangle: Rectangle) {
    return "<rectangle>" + "\n" +
    "    <id>" + rectangle.getId() + "</id>" + "\n" +
    "    <x>" + rectangle.getX() + "</x>" + "\n" +
    "    <y>" + rectangle.getY() + "</y>" + "\n" +
    "    <width>" + rectangle.getWidth() + "</width>" + "\n" +
    "    <height>" + rectangle.getHeight() + "</height>" + "\n" +
    "</rectangle>";
  };

  visitCompoundGraphic(compoundShape: CompoundShape) {
    return "<compound_graphic>" + "\n" +
    "   <id>" + compoundShape.getId() + "</id>" + "\n" +
    this._visitCompoundGraphic(compoundShape) +
    "</compound_graphic>";
  };

  _visitCompoundGraphic(compoundShape: CompoundShape) {
    let str = "";
    for (const shape of compoundShape.getChildren()) {
      str += "   " + shape.accept(this).replace("\n", "\n    ") + "\n";
    } 
    return str;
  }
}