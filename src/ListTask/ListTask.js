import React, { Component } from 'react';
import './ListTask.css';

class ListTask extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                ListTask
                <ul>
                    {
                      this.props.values && this.props.values.map(element => {
                            return (
                                <li key={element}>
                                    {element}
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