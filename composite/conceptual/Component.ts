export abstract class Component {
  protected parent!: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component) {}
  public remove(component: Component) {}

  public isComposite(): boolean {
    return false
  }

  public abstract operation(): string;
}