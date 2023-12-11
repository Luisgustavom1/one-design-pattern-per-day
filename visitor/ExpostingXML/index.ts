import { Circle } from "./Circle";
import { CompoundShape } from "./CompoundShape";
import { Dot } from "./Dot";
import { Rectangle } from "./Rectangle";
import { XMLExportVisitor } from "./XMLExportVisitor";

const dot = new Dot(1, 10, 55);
const circle = new Circle(2, 23, 15, 10);
const rectangle = new Rectangle(3, 10, 17, 20, 30);

const compoundShape = new CompoundShape(4);
compoundShape.add(dot);
compoundShape.add(circle);
compoundShape.add(rectangle);

const compoundShape2 = new CompoundShape(5);
compoundShape2.add(dot);
compoundShape.add(compoundShape2);

const exportVisitor = new XMLExportVisitor();
console.log(exportVisitor.export(circle, compoundShape));
