import { createAction, props } from '@ngrx/store';
import { ITodo } from 'src/app/interfaces/todo';
export const getTodos = createAction('GET_TODOS', props<{ todos: ITodo[] }>());
export const addTodo = createAction('ADD_TODO', props<{ todo: ITodo }>());
export const browserReload = createAction(
  '[Todo Component] Browser Reload',
  props<{ todos: ITodo[] }>()
);

export const deletedTodo = createAction('DELETE_TODO', props<{ id: string }>());
