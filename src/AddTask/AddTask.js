import React, { Component } from 'react';
import './AddTask.css';
import ListTask from "../ListTask/ListTask";

class AddTask extends React.Component {


    state = {
        tasks: [],
        currentTask: ''
    };


    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleClick = () => {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, this.state.currentTask]
        }))
    };

    render() {
        return (
            <div>
                <div>AddTask</div>
                <input
                    type="text"
                    value={this.state.currentTask}
                    onChange={this.handleChange}
                    id="currentTask"
                />

                {<button onClick={this.handleClick}>Dodaj</button>}
                <ListTask values={this.state.tasks}/>
            </div>
        );
    }
}

export default AddTask;