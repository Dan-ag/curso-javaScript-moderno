import {
  Todo,
  TodoList,
} from './classes';

import './styles.css';
import { crearTodoHtml } from './js/components';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);