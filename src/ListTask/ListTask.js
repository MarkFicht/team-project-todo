import React, { Component } from 'react';
import './ListTask.css';

class ListTask extends React.Component {

    constructor(props) {
        super(props);

    }

    removeTask(index) {
        const tasks = this.props.values;
        tasks.splice(index, 1);

        this.setState({
            tasks
        })
    }

    render() {
        return (
            <div>
                ListTask
                <ul>
                    {
                      this.props.values && this.props.values.map( (element, index) => {
                            return (
                                <li key={element}>
                                    {element}
                                    <button onClick={event => this.removeTask(index, event)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ListTask;