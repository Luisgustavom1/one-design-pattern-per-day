import { Button } from "../Buttons/Button";

export abstract class Dialog {
  abstract createButton(): Button;

  render() {
    const button = this.createButton();
    button.onClick(() => console.log("Button clicked..."))
    button.render();
    button.click();
  }
}

