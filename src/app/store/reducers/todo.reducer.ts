import { ITodo } from './../../interfaces/todo';
import { createReducer, on } from '@ngrx/store';
import { getTodos, addTodo, deletedTodo } from '../actions/todo.actions';
export const initialState = {
  todos: [],
};

const todoReducer = createReducer(
  initialState,
  on(getTodos, (state: any, action) => {
    console.log(action.todos);
    return {
      ...state,
      todos: action.todos,
    };
  }),
  on(addTodo, (state: any, action) => {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }),
  on(deletedTodo, (state: any, action) => {
    return {
      ...state,
      todos: state.todos.filter((todo: ITodo) => todo._id !== action.id),
    };
  })
);

export default todoReducer;
