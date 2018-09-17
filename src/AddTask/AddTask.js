import React, { Component } from 'react';
import './AddTask.css';
import ListTask from "../ListTask/ListTask";

class AddTask extends React.Component {

    state = {
        tasks: [],
        currentTask: '',
        validationTask: false,
        priorityTask: 1,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            validationTask: e.target.value.length < 3 || e.target.value.length > 20 ? false : true,
        })
    };

    handleChangePrio = (e) => {
        if (e.target.value > 5) {
            this.setState({ [e.target.id]: 5 })
        }
        else if (e.target.value <= 1) {
            this.setState({ [e.target.id]: 1 })
        }
        else {
            this.setState({ [e.target.id]: e.target.value })
        }
    };

    handleClick = () => {
        if (this.state.validationTask) {

            this.setState(prevState => ({
                tasks: [...prevState.tasks, this.state.currentTask],
                currentTask: '',
                validationTask: false
            }))
        }
    };

    render() {
        return (
            <div>
                <div>Add task</div>
                <input
                    type="text"
                    value={this.state.currentTask}
                    onChange={this.handleChange}
                    id="currentTask"
                />
                <div>Set priority task</div>
                <input
                    type="number"
                    value={this.state.priorityTask}
                    onChange={this.handleChangePrio}
                    id="priorityTask"
                />
                <br /> {/* ****Odstepy do usuniecia po dodaniu CSSow**** */}
                {
                    this.state.validationTask ? 'Mozna dodac taska' : 'Musi zawierac od 3 do 20 znakow'
                }
                <br /> {/* ****Odstepy do usuniecia po dodaniu CSSow**** */}
                {
                    <button onClick={this.handleClick}>Dodaj</button>
                }
                <ListTask values={this.state.tasks}/>
            </div>
        );
    }
}

export default AddTask;