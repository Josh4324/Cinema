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
        const {me, user } = this.props;
       
    
        return (
            <div>
                <nav className="nav">
        <NavLink to={me !== null ? "/add" : "/login"} id="nonav"><div className="brand"> { user !== null  ? <img src={user.pics} className="userimage" alt="user" /> : <i className="fas fa-user icon-user"></i> }</div></NavLink> 
                    <ul ref="tog" className='nav-inner nav-inner1'>
                        <li className="nav-item"><NavLink to="/" exact className="nav-link"><span className="text-none">Home</span><span className="ml-2"><i className="fas fa-home icon"></i></span></NavLink></li>
                        <li className="nav-item "><NavLink to="/Discover" className="nav-link"><span className="text-none">Discover</span><span className="ml-2"><i className="fas fa-compass icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to="/Review"  className="nav-link"><span className="text-none">Review</span><span className="ml-2"><i className="far fa-check-square icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to={ me !== null ? "/Add1" : "/login"} className="nav-link"><span className="text-none">Add</span><span className="ml-2"><i className=" fas fa-plus icon"></i></span></NavLink></li>
                        <li className="nav-item"><NavLink to="/Notification" className="nav-link"><span className="text-none">Notification</span><span className="ml-2"><i className="fas fa-bell icon"></i></span></NavLink></li>
                    </ul>
                    <div className="Search">
                        <span><i className="fas fa-search icon-search"></i></span>
                        <input type="text" className="Search-input" placeholder="Search for Tickets"></input>
                    </div>
                
                    <a href="/" onClick={this.handleSubmit} className={ me !== null ? "log1" : "nothing"}> <span><i className="fas fa-power-off"></i></span> <span className="out">LogOut</span></a>
                    <span className="elip" onClick={this.toogle.bind(this)}><i className="fas fa-ellipsis-v icon"></i></span>
                </nav>
            </div>
        );
    }
}

export default Bar;