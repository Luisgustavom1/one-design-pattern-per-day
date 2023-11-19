import { Button } from "./Button";


export class WindowsButton implements Button {
  private cb?: () => void;

  render(): void {
    console.log("Render button in windows...");
  }
  onClick(fn: () => void): void {
    this.cb = fn;
  }
  click(): void {
    this.cb?.();
  }
}
