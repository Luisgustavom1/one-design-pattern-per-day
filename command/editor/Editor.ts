export class Editor {
  private text: string = "";
  private selection?: string;

  public getSelection() {
    return this.selection;
  }

  public deleteSelection() {
    if (!this.selection) return
    const selectionIndex = this.text.indexOf(this.selection);
    const before = this.text.slice(0, selectionIndex)
    const after = this.text.slice(selectionIndex + this.selection.length)
    
    this.text = before + after
    this.selection = "";
  }

  public setSelection(text?: string) {
    this.selection = text;
  }

  public replaceSelection(text: string) {
    if (!this.selection) {
      this.text += text; 
    } else {
      this.text.replace(this.selection, text);
    }

    this.selection = text;
  }

  public setText(text: string) {
    this.text = text;
    this.selection = "";
  } 

  public getText() {
    return this.text;
  } 
}