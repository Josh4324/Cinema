import React, { Component } from 'react';
import {ReviewPics, ReviewVideo} from '../data';
import Image from './Image';
import Video from './Video';

class Discover extends Component {
    constructor(){
        super();

        this.state = {
            data:ReviewPics,
            video:ReviewVideo,
        };
    }

    render() {
        const data = this.state.data;
        const video = this.state.video;

        return (
            <div className="Discover-container">
                <div>
                    <h3 className="center-h3">New Realeases</h3>
                    <div className="Image-container" id="style-1">
                       {
                        data.map((value) => {
                            return <Image key={value.id} data={value}></Image>
                        })
                       }
                    </div>
                </div>
                    <h3 className="center-h3">Trailer Videos</h3>
                    <div className="Video-container" id="style-1">
                       {
                        video.map((value) => {
                            return <Video key={value.id} data={value}></Video>
                        })
                       }
                    </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Discover;