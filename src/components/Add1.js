import React, { Component } from 'react';

class Add1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="form-box">
                <h3 className="form-h3">Upload Video</h3>
                <form className="form">
                    <div className="form-block">
                    <label htmlFor="video">Video</label>
                    <input type='file' name="video" placeholder="upload video" id="video" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" placeholder="Write a caption" id="caption"/>
                    </div>
                    <div className="form-block">
                    <label htmlFor="title">Film Title</label>
                    <input type='text' name="title" placeholder="Film Title" id="title" />
                    </div>
                    <div className="form-block">
                    <label htmlFor="view">Viewing Time</label>
                    <input type='datetime-local' name="view" placeholder="Viewing Time" id="view" />
                    </div>
                    <div className="form-block">
                        <button onClick={(evt) => this.props.addDate1(evt)} className="button1 button">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Add1;