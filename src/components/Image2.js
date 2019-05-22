import React, { Component } from 'react';

class Image extends Component {
    render() {
        const {image,alt,name,big} = this.props.data;
        
        return (
            <div className="image">
            <img className="img"  src={image} alt={alt} />
            <p className="image-name">{name}</p>
        </div>
        );
    }
}

export default Image;