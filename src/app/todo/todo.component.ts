import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ITodoBody, ITodo } from '../interfaces/todo';
import { Store } from '@ngrx/store';
import {
  getTodos,
  addTodo,
  deletedTodo,
  browserReload,
} from '../store/actions/todo.actions';
import { take } from 'rxjs';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = [];
  public title: any = '';
  public description: any = '';
  constructor(
    private todoService: TodoService,
    private store: Store<{ todoReducer: any }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(browserReload({ todos: this.todos }));
    this.todoService.getTodos().subscribe((data) => {
      this.store.dispatch(getTodos({ todos: data }));
      this.store
        .pipe(take(1))
        .subscribe((s) => (this.todos = s.todoReducer.todos));
    });
  }
  delete(id: string) {
    this.todoService.deleteTodo(id).subscribe((data) => {
      this.store.dispatch(deletedTodo({ id: id }));
      this.todos = this.todos.filter((todo) => todo._id !== id);
    });
  }
  changeTitle(event: any): void {
    this.title = event.target.value;
  }
  changeDescription(event: any): void {
    this.description = event.target.value;
  }
  onSubmit(event: any) {
    this.todoService
      .addTodo({ title: this.title, description: this.description })
      .subscribe((data) => {
        this.store.dispatch(addTodo({ todo: data }));
        this.todos = [...this.todos, data];
      });
    this.title = '';
    this.description = '';
  }
}
