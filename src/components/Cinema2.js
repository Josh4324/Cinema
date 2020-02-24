import React, { Component } from 'react';


class Cinema2 extends Component {


    

    render() {
        const {video,title,view, pics, fullname, meid, key, likes, dislikes,commentsList} = this.props.newdata;
        const {history, newdata, disLikes, addLikes, me, addComment, user_meid } = this.props
        console.log("new", newdata)
        let commentno;
        if (commentsList === undefined){
            commentno = 0
        }else{
            commentno = commentsList.length
        }
        
       
        
        return (
            <div className="card card1 ">
               
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
                            <span className="block" onClick={() => { me !== null ? addLikes(meid,key,user_meid) : history.push(`/login`)}      }     ><span className="soc">{likes === 0 ? null : likes}</span><span><i className="fas fa-heart social-icon "></i></span><span className="icon-text">Like</span></span>
                            <span className="block" onClick={() =>  { me !== null ? disLikes(meid,key,user_meid) : history.push(`/login`) }  } ><span className="soc">{dislikes === 0 ? null : dislikes}</span><span><i className="fas fa-thumbs-down social-icon "></i></span><span className="icon-text">Dislike</span></span>
                            <span className="block" onClick={ () => (me !== null ? null : history.push(`/login`) )  }><span className="soc">{commentno === 0 ? null : commentno}</span><span><i className="far fa-comment social-icon"></i></span><span className="icon-text">Comment</span></span>
                        </div>
                        <div className="views">
                            <p className="view-p">300 views</p>
                        </div>
                        <div ref={this.myRef}>
                        </div>
                        <div className="write-comment" >
                            <div className="write" onKeyUp = { (evt) => addComment(evt,meid,key)}  contentEditable data-text="Write a comment ...."  ></div>
                        </div>

                        { commentsList === undefined ? <div></div> :

                        <div>{  
                            commentsList.map((item) => {
                                if (item !== null){
                                    return <div className="commentlist">
                                        <span><img className="cimg" src={item.pics} alt=""/></span>
                                        <div className="comment">
                                            <span className="cname">{item.name}</span>
                                            <span>{item.comment}</span>
                                        </div>
                                        
                                    </div>
                                }
                                
                            })
                        }</div>

                    }
                        
                    </div>
                        
                  

            </div>
        );
    }
}

export default Cinema2;