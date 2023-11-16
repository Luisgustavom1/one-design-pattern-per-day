import { Circle } from "./Circle";
import { CompoundGraphic } from "./CompoundGraphic";
import { Dot } from "./Dot";
import { Graphic } from "./Graphic";

export class ImageEditor {
  private all?: CompoundGraphic;

  load() {
    this.all = new CompoundGraphic();
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(9, 5, 9));

    this.all.draw();
  }

  refresh() {
    this.all?.draw()
  }

  groupSelected(components: Array<Graphic>) {
    const group = new CompoundGraphic();

    for (const component of components) {
      group.add(component);
    }

    this.all?.add(group);
  }
}