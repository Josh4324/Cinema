import React, { Component } from 'react';

class Add extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="form-box">
                <h3 className="form-h3">Add Video and Description</h3>
                <form className="form">
                    <div className="form-block">
                    <label htmlFor="CinemaName">Full Name</label>
                    <input type="text" name="fullname" placeholder="Full Name" id="fullname" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="FilmTitle">username</label>
                    <input type="text" name="username" placeholder="Username" id="username"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="pics">Upload picture</label>
                    <input id="pics" name="pics" type="file"/>
                    </div>
                    <div className="form-block">
                        <button onClick={(evt) => this.props.addDate(evt)} className="button1 button">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Add;