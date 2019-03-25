import React, { Component } from 'react';

class Add extends Component {
    render() {
        return (
            <div>
                <div className="form-box">
                <h3 className="form-h3">Add Video and Description</h3>
                <form className="form">
                    <div className="form-block">
                    <label htmlFor="CinemaName">Cinema Name:</label>
                    <input type="text" name="CinemaName" placeholder="Cinema Name" id="CinemaName" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="FilmTitle">Film Title:</label>
                    <input type="text" name="FilmTitle" placeholder="Film Title" id="FilmTitle"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="date">Viewing Date:</label>
                    <input type="date" className="timedate" name="date" id="date"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="time">Viewing Time</label>
                    <input type="time" className="timedate" name="time" id="time"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="video">Upload Video</label>
                    <input id="video" name="video" type="file"/>
                    </div>
                    <div className="form-block">
                        <button className="button1 button">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Add;