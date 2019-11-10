import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

class Cinema extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
       
    }

    commentToggle = () => {
        const nd = this.myRef.current
        nd.classList.toggle("op");
    }

    render() {
        const {film_title, cinema_name, showing, video,views,comments,likes,dislikes,commentno,} = this.props.data;
        const id = this.props.new;
        const {logState, history } = this.props
        console.log(this.props)
       
        
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
                            <span className="block" onClick={() => { logState ? value.addLikes(id) : history.push(`/login`)}      }     ><span className="soc">{likes === 0 ? null : likes}</span><span><i className="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span></span>
                            <span className="block" onClick={() =>  { logState ? value.addDislikes(id) : history.push(`/login`) }  } ><span className="soc">{dislikes === 0 ? null : dislikes}</span><span><i className="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span></span>
                            <span className="block" onClick={ () => (logState ? this.commentToggle : history.push(`/login`) )  }><span className="soc">{commentno === 0 ? null : commentno}</span><span><i className="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span></span>
                        </div>
                        <div className="views">
                            <p className="view-p">{views} views</p>
                        </div>
                        <div ref={this.myRef}>
                        {
                            Object.keys(comments).map(key => (
                        <div key={key} className="comments" >
                            <span className="name">{comments[key].name}</span><span className="comment">{comments[key].comment}</span>
                        </div>
                        ))}
                        </div>
                        <div className="write-comment" >
                            <div className="write"  contentEditable data-text="Write a comment ...." onKeyUp={(evt) => value.handlePress(evt,id)} ></div>
                        </div>
                    </div>
                        
                    )}
                </ProductConsumer>

            </div>
        );
    }
}

export default Cinema;