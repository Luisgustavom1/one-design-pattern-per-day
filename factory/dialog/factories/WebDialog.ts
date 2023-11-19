import { Button } from "../Buttons/Button";
import { Dialog } from "./Dialog";
import { WebButton } from "../Buttons/WebButton";

export class WebDialog extends Dialog {
  // can has more business logic in this class
  createButton(): Button {
    // maybe get object from cache
    return new WebButton();
  }
}

