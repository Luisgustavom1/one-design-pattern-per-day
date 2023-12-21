export interface Profile {
  type: string;
  
  getId(): number;
  getEmail(): string;
  getContacts(): string[];
}