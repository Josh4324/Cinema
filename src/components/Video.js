import React, { Component } from 'react';

class Video extends Component {
    render() {
        const {video,name} = this.props.data;
        return (
            <div className="video-box">
                <iframe className="video-review" autoPlay loop muted id="video" title={name} src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Video;