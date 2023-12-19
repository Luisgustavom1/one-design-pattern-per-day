import { TreeType } from "./TreeType"

// Flyweight factory decides whether to re-use existing flyweight or to create a new one.
export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map()

  static getTreeType (name: string, color: string, texture: string): TreeType {
    let type = this.treeTypes.get(name)
    if (!type) {
      type = new TreeType(name, color, texture)
      this.treeTypes.set(name, type)
    }
    return type
  }

  static countTreeTypes (): number {
    return this.treeTypes.size
  }
}