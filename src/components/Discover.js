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
        const value = [...this.state.data];

        return (
            <div className="Discover-container">
                <div>
                    <h3 className="center-h3">Discover</h3>
                    <div className="Image-container">
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