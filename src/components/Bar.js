import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Bar extends Component {

    toogle(){
        const node = this.refs.tog
        node.classList.toggle('open');
    }

    handleSubmit = () => {
        const { submit } = this.props;
        submit()
    };
    
    render() {
        const { logState, me } = this.props;
        console.log(logState, me)
        return (
            <div>
                <nav className="nav">
                    <div className="brand"><i className="fas fa-user icon-user"></i></div>
                    <ul ref="tog" className='nav-inner nav-inner1'>
                        <li className="nav-item"><NavLink to="/" exact className="nav-link"><span className="text-none">Home</span><span className="ml-2"><i className="fas fa-home icon"></i></span></NavLink></li>
                        <li className="nav-item "><NavLink to="/Discover" className="nav-link"><span className="text-none">Discover</span><span className="ml-2"><i className="fas fa-compass icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to="/Review"  className="nav-link"><span className="text-none">Review</span><span className="ml-2"><i className="far fa-check-square icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to="/Add" className="nav-link"><span className="text-none">Add</span><span className="ml-2"><i className=" fas fa-plus icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to="/Notification" className="nav-link"><span className="text-none">Notification</span><span className="ml-2"><i className="fas fa-bell icon"></i></span></NavLink></li>
                    </ul>
                    <div className="Search">
                        <span><i className="fas fa-search icon-search"></i></span>
                        <input type="text" className="Search-input" placeholder="Search for Tickets"></input>
                    </div>
                    <span className="elip" onClick={this.toogle.bind(this)}><i className="fas fa-ellipsis-v icon"></i></span>

                    <a href="/" onClick={this.handleSubmit} className={ this.props.me !== null ? "log1" : "nothing"} >LogOut</a>
                    
                </nav>
            </div>
        );
    }
}

export default Bar;