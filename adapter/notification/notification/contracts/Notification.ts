/**
 * The Target interface represents the interface that your application's classes
 * already follow.
 */
export interface Notification {
  send(title: string, message: string): void;
}