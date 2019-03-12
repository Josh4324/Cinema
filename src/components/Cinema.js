import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

class Cinema extends Component {
    
    render() {
        const {id, film_title, cinema_name, showing, video,views,comments} = this.props.data;
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
                            <iframe className="video" autoPlay loop muted id="video" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <button className="button">Buy Ticket</button>
                        </div>
                        <div className="socialbuttons mx-auto">
                            <span><i class="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span>
                            <span><i class="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span>
                            <span><i class="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span>
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