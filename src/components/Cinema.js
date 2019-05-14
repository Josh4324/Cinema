import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

class Cinema extends Component {
    
    render() {
        const {film_title, cinema_name, showing, video,views,comments} = this.props.data;
        return (
            <div className="card card1 ">
                <ProductConsumer>
                    {(value) => (
                    <div>
                        <div className="card-header1">
                            <div className="person"><i className="fas fa-user icon-person"></i></div>
                            <div className="desc">
                                <p>{cinema_name}</p>
                                <p>{film_title}</p>
                                <p>{showing}</p>
                            </div>
                        </div>
                        <div >
                            <iframe className="video" autoPlay loop muted id="video" title={film_title} src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <button className="button"><span className="white">Buy Ticket</span></button>
                        </div>
                        <div className="socialbuttons mx-auto">
                            <span className="block"><span><i className="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span></span>
                            <span className="block"><span><i className="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span></span>
                            <span className="block"><span><i className="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span></span>
                        </div>
                        <div className="views">
                            <p className="view-p">{views} views</p>
                        </div>
                        <div className="comments">
                            <span className="name">{comments[0].name}</span><span className="comment">{comments[0].comment}</span>
                        </div>
                        <div className="write-comment">
                            <input className="write" type="text" placeholder="write a comment...."></input>
                        </div>
                    </div>
                        
                    )}
                </ProductConsumer>

            </div>
        );
    }
}

export default Cinema;