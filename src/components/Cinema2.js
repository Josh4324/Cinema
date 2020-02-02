import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

class Cinema2 extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
       
    }

    commentToggle = () => {
        const nd = this.myRef.current
        nd.classList.toggle("op");
    }

    render() {
        const {caption,email,video,title,view, pics, fullname} = this.props.newdata;
        const id = this.props.new;
        const {logState, history, newdata, } = this.props
        console.log("new", newdata)
        let likes = 0
        let dislikes = 0
        let commentno = 0
       
        
        return (
            <div className="card card1 ">
                <ProductConsumer>
                    {(value) => (
                    <div>
                        <div className="card-header1">
                            <div>
                    <div className="person">{ pics !== null ? <img src={pics} className="userimage" alt={fullname} /> : <i className="fas fa-user icon-person"></i>}</div>
                            <div className="desc">
                                <p>Cinema name</p>
                                <p>{title}</p>
                                <p>{view}</p>
                            </div>
                            </div>
                        </div>
                        <div>
                            <video src={video} className="videon" controls type="video/mp4"  />
                            <button className="button"><span className="white">Buy Ticket</span></button>
                        </div>
                        <div className="socialbuttons mx-auto">
                            <span className="block" onClick={() => { logState ? value.addLikes(id) : history.push(`/login`)}      }     ><span className="soc">{likes === 0 ? null : likes}</span><span><i className="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span></span>
                            <span className="block" onClick={() =>  { logState ? value.addDislikes(id) : history.push(`/login`) }  } ><span className="soc">{dislikes === 0 ? null : dislikes}</span><span><i className="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span></span>
                            <span className="block" onClick={ () => (logState ? this.commentToggle : history.push(`/login`) )  }><span className="soc">{commentno === 0 ? null : commentno}</span><span><i className="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span></span>
                        </div>
                        <div className="views">
                            <p className="view-p">300 views</p>
                        </div>
                        <div ref={this.myRef}>
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

export default Cinema2;