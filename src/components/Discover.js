import React, { Component } from 'react';
import {ReviewPics, ReviewVideo} from '../data';
import Image from './Image';
import Video from './Video';
import Image2 from './Image2';

class Discover extends Component {
    constructor(){
        super();

        this.state = {
            data:ReviewPics,
            video:ReviewVideo,
        };
    }

    render() {
        const value = [...this.state.data];
        const data = this.state.data;
        const video = this.state.video;

        return (
            <div className="Discover-container">
                <div>
                    <h3 className="center-h3">New Releases</h3>
                    <div className="Image-container" id="style-1">
                       {
                        data.map((value) => {
                            return <Image2 key={value.id} data={value}></Image2>
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
                    <h3 className="center-h3">Discover</h3>
                    <div className="Image-contain">
                    {
                        value.map((data) => {

                            return <Image key={data.id} data={data}/>
                        })

                    }
                        
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Discover;