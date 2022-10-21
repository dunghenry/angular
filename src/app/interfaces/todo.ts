export interface ITodoBody {
  title: string;
  description: string;
}
export interface ITodo extends ITodoBody {
  _id: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
