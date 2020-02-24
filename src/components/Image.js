import React, { Component } from 'react';

class Image extends Component {
    render() {
        const {image,alt,} = this.props.data;
        
        return (
        <div className="image1">
            <img className="img1"  src={image} alt={alt} />
        </div>
        );
    }
}

export default Image;