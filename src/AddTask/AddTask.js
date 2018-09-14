import React, { Component } from 'react';
import './AddTask.css';

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
                <ul>
                    {
                        this.state.tasks.map(element => {
                            return (
                                <li key={element}>
                                    {element}
                                </li>
                            )
                        })
                    }
                </ul>
                {<button onClick={this.handleClick}>Dodaj</button>}
            </div>
        );
    }
}

export default AddTask;