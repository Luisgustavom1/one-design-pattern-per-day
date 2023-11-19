import { Button } from "./Button";


export class WebButton implements Button {
  private cb?: () => void;

  render(): void {
    console.log("Render button in web...");
  }
  onClick(fn: () => void): void {
    this.cb = fn;
  }
  click() {
    this.cb?.();
  }
}
