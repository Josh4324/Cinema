import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom'


class Bar extends Component {

    toogle(){
        const node = ReactDOM.findDOMNode(this.refs.tog);
        node.classList.toggle('open');
    }
    
    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="brand"><i className="fas fa-user icon-user"></i></div>
                    <ul ref="tog" className='nav-inner nav-inner1'>
                        <li className="nav-item"><Link to="/" className="nav-link active"><span className="text-none">Home</span><span className="ml-2"><i className="fas fa-home icon"></i></span></Link></li>
                        <li className="nav-item "><Link to="/" className="nav-link"><span className="text-none">Discover</span><span className="ml-2"><i className="fas fa-compass icon"></i></span></Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link"><span className="text-none">Review</span><span className="ml-2"><i className="far fa-check-square icon"></i></span></Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link"><span className="text-none">Add</span><span className="ml-2"><i className=" fas fa-plus icon"></i></span></Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link"><span className="text-none">Notification</span><span className="ml-2"><i className="fas fa-bell icon"></i></span></Link></li>
                    </ul>
                    <div className="Search">
                        <span><i className="fas fa-search icon-search"></i></span>
                        <input type="text" className="Search-input" placeholder="Search for Tickets"></input>
                    </div>
                    <span className="elip" onClick={this.toogle.bind(this)}><i className="fas fa-ellipsis-v icon"></i></span>
                   
                </nav>
            </div>
        );
    }
}

export default Bar;