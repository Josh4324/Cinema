import React, { Component } from 'react';

class Notify extends Component {
    render() {
        const {notification,time} = this.props.data;
        return (
            <div>
                <div className="no-divide">
                <div className="person-no"><i className="fas fa-user icon-person2"></i></div>
                <div className="container-notify">
                    <p className="no-com">{notification}</p>
                    <p className="no-time">{time}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Notify;