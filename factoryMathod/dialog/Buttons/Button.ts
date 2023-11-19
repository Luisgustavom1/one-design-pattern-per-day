export interface Button {
  render(): void;
  onClick(fn: () => void): void;
  click(): void;
}
