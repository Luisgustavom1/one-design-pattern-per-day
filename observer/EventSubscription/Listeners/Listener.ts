export interface Listener<T> {
  update(event: T, file: File): void;
}
