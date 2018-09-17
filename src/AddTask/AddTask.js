import React, { Component } from 'react';
import './AddTask.css';
import ListTask from "../ListTask/ListTask";

class AddTask extends React.Component {

    state = {
        tasks: [],
        currentTask: '',
        validationTask: false
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
            validationTask: e.target.value.length < 3 || e.target.value.length > 20 ? false : true,
        })
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
                <div>AddTask</div>
                <input
                    type="text"
                    value={this.state.currentTask}
                    onChange={this.handleChange}
                    id="currentTask"
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