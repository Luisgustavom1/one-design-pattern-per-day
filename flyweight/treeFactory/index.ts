import { CanvasImpl } from "./Canvas/CanvasImpl";
import { Forest } from "./Forest";

function Client() {
  const forest = new Forest();

  forest.plantTree(1, 2, "tree 1", "green", "texture 1");
  forest.plantTree(4, 6, "tree 2", "yellow", "texture 2");
  forest.plantTree(12, 34, "tree black", "black", "texture");
  forest.plantTree(42, 14, "tree black", "black", "texture");
  forest.plantTree(31, 52, "tree black", "black", "texture");
  forest.plantTree(13, 52, "tree black", "black", "texture");
  forest.plantTree(52, 74, "tree black", "black", "texture");
  forest.plantTree(12, 14, "tree 8", "brow", "texture 4");

  const canvas = new CanvasImpl();
  forest.draw(canvas);

  console.log("Tree types created ", forest.countTreeTypes());
}

Client();