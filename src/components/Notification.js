import React, { Component } from 'react';
import {NotificationData} from '../data';
import Notify from './Notify';


class Notification extends Component {
    constructor(props){
        super(props);

        this.state = {
            check:true
        };

        this.change = this.change.bind(this);
        this.change2 = this.change2.bind(this);
    }

    change(){
        this.setState(() => {
            return { check:true}
        })
    }

    change2(){
        this.setState(() => {
            return { check:false}
        })
    }

    render() {
        console.log(this.state.check)
        const data = NotificationData;
        return (
            <div>

            <nav className="navnot">
                    <div className="nav-inline" onClick={this.change}>YOU</div>
                    <div className="nav-inline" onClick={this.change2}>SAVED</div>
            </nav>

            {
                this.state.check === true ? 
            
             <div className="Notification">
                <div className="notify-container">
                    {data.map((value) => {
                        return <Notify key = {value.id} data={value} />
                    })}
                </div>
            </div>

           :

           <div></div>
              
                }
            
           
            </div>
        );
    }
}

export default Notification;