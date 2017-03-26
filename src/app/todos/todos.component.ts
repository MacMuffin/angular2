import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = 'default';
  oldText;
  constructor(private _todoService: TodoService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    const newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo);
    this.text = '';
    this.snackBar.open('Todo has been added: ' + newTodo.text, null, {
      duration: 2000,
    });
  }

  deleteTodo(todoText){
    for (let i = 0; i < this.todos.length; i++) {
      if (todoText === this.todos[i].text) {
        this.todos.splice(i, 1);
      }
    }

    this._todoService.deleteTodo(todoText);
    this.snackBar.open('Following Todo has been deleted: ' + todoText, null, {
      duration: 2000,
    });
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(){
    for (let i = 0; i < this.todos.length; i++){
      if (this.oldText === this.todos[i].text){
        this.todos[i].text = this.text;
      }
    }

    this._todoService.updateTodo(this.oldText, this.text);
    this.appState = 'default';
    this.snackBar.open('Following Text: ' + this.oldText + ' has been updated to: ' + this.text, null, {
      duration: 2000,
    });
    this.text = '';
  }
}
