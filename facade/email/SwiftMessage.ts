export class SwiftMessage {
  private title: string;
  private templateRender: (...parameter: string[]) => string;

  constructor(
    title: string,
    render: (...parameter: string[]) => string,
  ) {
    this.title = title;
    this.templateRender = render;
  }

  public setTo(email: string) {
    return this.templateRender(this.title, email);
  }
}