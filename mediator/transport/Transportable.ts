export interface Transportable {
  embark(): void;
  disembark(): void;
  idle(): void;
  activate(): void;
}