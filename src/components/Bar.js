import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Bar extends Component {
  toogle() {
    const node = this.refs.tog;
    node.classList.toggle("open");
  }

  handleSubmit = () => {
    const { submit } = this.props;
    submit();
  };

  render() {
    const { me, user } = this.props;
    let username;
    if (user) {
      username = user.username.toUpperCase();
    }
    console.log(username);

    return (
      <div>
        <nav className="nav1">
          <NavLink to="/" id="nonav">
            <div className="brand1">
              <img src="cinema-logo.jpg" className="logo" alt="logo" />
            </div>
          </NavLink>
          <div className="Search">
            <span>
              <i className="fas fa-search icon-search"> </i>
            </span>
            <input
              type="text"
              className="Search-input"
              placeholder="Search for Tickets"
            ></input>
          </div>
          <NavLink to={me !== null ? "/add" : "/login"} id="nonav">
            <div className={user !== null ? "brand" : null}>
              {user !== null ? (
                <img src={user.pics} className="userimage" alt="user" />
              ) : null}
              <span className="userbrand">{username}</span>
            </div>
          </NavLink>

          <ul ref="tog" className="nav-inner nav-inner1">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">
                <span className="text-none"> Home </span>
                <span className="ml-2">
                  <i className="fas fa-home icon"></i>
                </span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Discover" className="nav-link">
                <span className="text-none"> Discover </span>
                <span className="ml-2">
                  <i className="fas fa-compass icon"></i>
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Review" className="nav-link">
                <span className="text-none"> Review </span>
                <span className="ml-2">
                  <i className="far fa-check-square icon"></i>
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Add1" className="nav-link">
                <span className="text-none"> Add </span>
                <span className="ml-2">
                  <i className=" fas fa-plus icon"></i>
                </span>
              </NavLink>
            </li>
          </ul>

          <a
            href="/"
            onClick={this.handleSubmit}
            className={me !== null ? "log1" : "nothing"}
          >
            <span>
              <i className="fas fa-power-off"> </i>
            </span>
            <span className="out"> LogOut </span>
          </a>

          <span className="elip" onClick={this.toogle.bind(this)}>
            <i className="fas fa-ellipsis-v icon"> </i>
          </span>
        </nav>
      </div>
    );
  }
}

export default Bar;
