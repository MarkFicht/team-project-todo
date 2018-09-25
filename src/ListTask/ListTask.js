import React, { Component } from 'react';
import './ListTask.css';

class ListTask extends React.Component {

    state = {
        tasks: [],
        secondList: []
    }

    removeTask = (event, index) => {
        const tasks = this.props.values;
        tasks.splice(index, 1);

        this.setState({
            tasks
        })
    };

    removeFromArchive = (event, index) => {
        const secondList = this.state.secondList;
        secondList.splice(index, 1);

        this.setState({
            secondList
        })
    };

    addToArchive = (event, item, index) => {

        const tasks = this.props.values;
        tasks.splice(index, 1);
        let secondList = this.state.secondList;
        secondList.push(item);

        this.setState({
            tasks,
            secondList
        });
    }

    render() {
        return (
            <div>
                ListTask
                <ul>
                    {    this.props.values.map( ( item, index) => {
                                return (
                                    <li key={item.name}>
                                        { item.name }<span style={{color: 'tomato', fontWeight: 'bold'}}>{ ` Priority: ${item.getPrio()}` }</span>
                                        <button onClick={event => this.removeTask( event, index)}>Delete</button>
                                        <button onClick={event => this.addToArchive(event, item, index)}>Archive</button>
                                    </li>
                                )

                        })
                    }
                </ul>
                Archive
                <ul>
                    {this.state.secondList.map( (item, index) => {
                        return (
                            <li style={{color: 'grey', fontWeight: 'light'}} key={item.name}>
                                { item.name }<span>{ ` Priority: ${item.getPrio()}` }</span>
                                <button onClick={event => this.removeFromArchive( event, index)}>Delete</button>
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