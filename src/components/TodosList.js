import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/').then(res => {
            this.setState({
                todos: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/').then(res => {
            this.setState({
                todos: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    todoList() {
        return this.state.todos.map((currentTodo, index) => {
            return <Todo todo={currentTodo} key={index} />
        });
    }

    render() {
        return (
            <div className="todos-list">
                <div className="uk-container">
                    <h4 className="uk-text-uppercase">Todo'<span className="uk-text-lowercase">s</span> list</h4>
                    <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                        <thead>
                            <tr>
                                <th className="uk-width-small">Responsible</th>
                                <th>Description</th>
                                <th>Proirity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.todoList() }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
