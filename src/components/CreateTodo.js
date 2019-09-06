import React, { Component } from 'react';
import '../App.scss';
import axios from 'axios';

export default class CreateTodo extends Component {

    state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }

    onChangeTodoDescription = (e) => {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible = (e) => {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority = (e) => {
        this.setState({
            todo_priority: e.target.value
        });
    }    

    handleSubmit = (e) => {
        
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo).then(res => console.log(res.data));

        e.preventDefault();
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
    }

    render() {
        return (
            <div className="create-todo">
                <div className="uk-container">
                    <h4 className="uk-text-uppercase">Create a New Todo</h4>
                    <form onSubmit={this.handleSubmit} className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-1">
                            <input className="uk-input" type="text" placeholder="Add todo" value={this.state.todo_description} onChange={this.onChangeTodoDescription}></input>
                        </div>
                        <div className="uk-width-1-1">
                            <input className="uk-input" type="text" placeholder="Add responsible" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}></input>
                        </div>
                        <div className="uk-form-controls">

                            <label><input className="uk-radio" type="radio" name="priorityOptions" id="priorityLow" value="Low" checked={this.state.todo_priority === 'Low'} onChange={this.onChangeTodoPriority} />Low</label>

                            <label><input className="uk-radio" type="radio" name="priorityOptions" id="priorityMedium" value="Medium" checked={this.state.todo_priority === 'Medium'} onChange={this.onChangeTodoPriority} />Medium</label>

                            <label><input className="uk-radio" type="radio" name="priorityOptions" id="priorityHigh" value="High" checked={this.state.todo_priority === 'High'} onChange={this.onChangeTodoPriority} />High</label>

                        </div>
                        <div className="uk-width-1-1">
                            <button type="submit" value="Create Todo" className="uk-button uk-button-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
