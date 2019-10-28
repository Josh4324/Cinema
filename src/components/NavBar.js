import React, { Component } from 'react';
import Bar from './Bar';
import 'bootstrap';


class NavBar extends Component {
    render() {
        return (
            <div>
               <Bar submit={this.props.onSubmit} me={this.props.me} logState={this.props.logState}></Bar>
            </div>
        );
    }
}

export default NavBar;