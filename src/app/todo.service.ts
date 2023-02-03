import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo, ITodoBody } from './interfaces/todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getTodos(): Observable<ITodo[]> {
    return this.http.get<
      ITodo[]
    >(`https://api-todos-0ylw.onrender.com/api/v1/todos
`);
  }
  addTodo(data: ITodoBody): Observable<ITodo> {
    return this.http.post<ITodo>(
      `https://api-todos-0ylw.onrender.com/api/v1/todos
`,
      data
    );
  }
  deleteTodo(id: string) {
    return this.http.delete(
      `https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`
    );
  }
}
