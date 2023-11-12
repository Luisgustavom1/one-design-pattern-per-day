export interface Command {
  saveBackup(): void; 
  undo(): void; 
  execute(): boolean; 
}