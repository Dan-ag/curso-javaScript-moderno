import { Todo } from './todo.class';

export class TodoList {

  constructor() {
    this.loadLocalStorage();
  }

  newTodo( todo ) {
    this.todos.push( todo );
    this.saveLocalStorage();
  }

  deleteTodo( id ) {
    this.todos = this.todos.filter( todo => todo.id != id );
    this.saveLocalStorage();
  }

  completeTodo( id ) {
    for ( const todo of this.todos ) {
      if ( todo.id == id) {
        todo.completed = !todo.completed;
        break;
      }
    }
  }

  deleteCompletedTodo( ) {
    const todos = this.todos.filter( todo => todo.completed );


    for ( const todo of todos ) {
      this.deleteTodo( todo.id )
    }

    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem( 'todos', JSON.stringify( this.todos ) )
  }

  loadLocalStorage() {
    this.todos = JSON.parse( localStorage.getItem( 'todos' ) || '[]' );

    this.todos = this.todos.map( Todo.fromJson );
  }
}