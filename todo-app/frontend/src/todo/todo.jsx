import React, { Component } from 'react'

import Header from '../template/header'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'


export default class Todo extends Component {

    render() {
        return (
            <div>
                <Header name="Tarefas" small="Cadastro"></Header>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}