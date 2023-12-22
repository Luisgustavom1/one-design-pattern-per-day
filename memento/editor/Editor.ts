import { Snapshot } from "./Snapshot";

export class Editor {
  private text: string = '';
  private curX: number = 0;
  private curY: number = 0;
  private selectionWidth: string = '';

  setText(text: string) {
    this.text = text;
  }

  setCursor(x: number, y: number) {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width: string) {
    this.selectionWidth = width;
  }

  createSnapshot(): Snapshot {
    // Memento should be immutable
    return new Snapshot(
      this, 
      this.text, 
      this.curX, 
      this.curY,
      this.selectionWidth,  
    );
  }

  toString() {
    return `Text: ${this.text}, Cursor: (${this.curX}, ${this.curY}), Selection width: ${this.selectionWidth}`;
  }
}