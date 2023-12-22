import { Editor } from "./Editor";

export class Snapshot {
  constructor(
    private editor: Editor,
    private text: string = '',
    private curX: number = 0,
    private curY: number = 0,
    private selectionWidth: string = '',
  ) {}

  restore() {
    this.editor.setText(this.text);
    this.editor.setCursor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}