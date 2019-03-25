import React, { Component } from 'react';
import {NotificationData} from '../data';
import Notify from './Notify';

class Notification extends Component {
    render() {
        const data = NotificationData;
        return (
            <div className="Notification">
                <div className="notify-container">
                    {data.map((value) => {
                        return <Notify key = {value.id} data={value} />
                    })}
                </div>
            </div>
        );
    }
}

export default Notification;