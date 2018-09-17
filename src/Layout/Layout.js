import React, { Component } from 'react';
import './Layout.css';

import Header from '../Header/Header.js';
import AddTask from '../AddTask/AddTask';
import ListTask from '../ListTask/ListTask';
import Archive from '../Archive/Archive';
import Footer from '../Footer/Footer';

class Layout extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p className='test'>Text z layout'u</p>
                <Header />
                <AddTask />
                <Archive />
                <Footer />
            </div>
        );
    }
}

export default Layout;