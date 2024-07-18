export interface AddTask {
    (text: string): void;
  }
  
  export interface ToggleTask {
    (id: number): void;
  }
  
  export interface DeleteTask {
    (id: number): void;
  }