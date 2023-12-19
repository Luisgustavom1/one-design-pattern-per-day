import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

function ClientCode() {
  const shapes: Shape[] = [];
  const shapesCopy: Shape[] = [];

  const circle = new Circle()
  circle.x = 7;
  circle.y = 25;
  circle.radius = 10;
  circle.color = "blue";
  shapes.push(circle);

  const anotherCircle = circle.clone();
  shapes.push(anotherCircle);

  const rectangle = new Rectangle();
  rectangle.width = 10;
  rectangle.height = 20;
  rectangle.color = "green";
  shapes.push(rectangle);

  shapes.forEach(shape => {
    shapesCopy.push(shape.clone());
  });

  rectangle.height = 25;
  shapes[2] = rectangle;

  compareShapes(shapes, shapesCopy);
}

function compareShapes(shapes: Shape[], shapesCopy: Shape[]) {
  shapes.forEach((shape, index) => {
    const shapeToCompare = shapesCopy[index];
    if (!shapeToCompare) return;
    if (shape.equals(shapeToCompare)) {
      console.log("Shapes are equal at index " + index);
    } else {
      console.log("Shapes are not equal at index " + index);
    }
  });
}

ClientCode();