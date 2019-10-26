import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
class CinemaReview extends Component {
    render() {
        const {name,video,views,comments} = this.props.data;
        return (
            <div className="card card1 ">
                <ProductConsumer>
                    {(value) => (
                    <div>
                        <div className="card-header1">
                            <div className="person"><i className="fas fa-user icon-person"></i></div>
                        </div>
                        <div >
                            <iframe className="video" autoPlay loop muted id="video" title={name} src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <button className="button">Buy Ticket</button>
                        </div>
                        <div className="socialbuttons mx-auto">
                            <span className="block"><span><i className="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span></span>
                            <span className="block"><span><i className="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span></span>
                            <span className="block"><span><i className="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span></span>
                        </div>
                        <div className="views">
                            <p className="view-p">{views} views</p>
                        </div>
                        <div>
                        {
                            Object.keys(comments).map(key => (
                        <div key={key} className="comments" >
                            <span className="name">{comments[key].name}</span><span className="comment">{comments[key].comment}</span>
                        </div>
                        ))}
                        </div>
                        <div className="write-comment" >
                            <div className="write"  contentEditable data-text="Write a comment ...."  ></div>
                        </div>
                    </div>
                        
                    )}
                </ProductConsumer>

            </div>
        );
    }
}

export default CinemaReview;