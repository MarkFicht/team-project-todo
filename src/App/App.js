import React, {Component} from 'react';
import './App.css';

import Layout from '../Layout/Layout.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Layout/>
                </div>
            </div>
        );
    }
}

export default App;
