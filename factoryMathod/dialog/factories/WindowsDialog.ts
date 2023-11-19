import { Button } from "../Buttons/Button";
import { Dialog } from "./Dialog";
import { WindowsButton } from "../Buttons/WindowsButton";

export class WindowsDialog extends Dialog {
  // can has more business logic in this class
  createButton(): Button {
    // maybe get object from cache
    return new WindowsButton();
  }
}

