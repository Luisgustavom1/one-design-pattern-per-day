import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";
import { ImageEditor } from "./ImageEditor";

const imageEditor = new ImageEditor();
imageEditor.load()

const compoundGraphic = new CompoundGraphic();
compoundGraphic.add(new Circle(4, 2, 9));
compoundGraphic.add(new Dot(7, 1));

compoundGraphic.move(8, 2);

const circle = new Circle(7, 1, 5);
imageEditor.groupSelected([compoundGraphic, circle])

console.log("\n")
imageEditor.refresh()

circle.move(94, 78)
console.log("\n")
imageEditor.refresh()

compoundGraphic.move(52, 47)
console.log("\n")
imageEditor.refresh();