import { Dialog } from "./factories/Dialog";
import { WebDialog } from "./factories/WebDialog";
import { WindowsDialog } from "./factories/WindowsDialog";

const randNumber = Number((Math.random() * 10).toFixed(0))

export class Application {
  private dialog?: Dialog

  initialize() {
    const config = {
      OS: (randNumber % 2) === 0 ? "Windows" : "Web"
    };

    switch (config.OS) {
      case "Windows":
        this.dialog = new WindowsDialog();
        return;
      case "Web":
        this.dialog = new WebDialog();
        return;
    }
  }

  main() {
    this.initialize();
    this.dialog?.render();
  }
}
