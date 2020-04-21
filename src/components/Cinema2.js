import React, { Component } from "react";
import PaystackButton from "react-paystack";

class Cinema2 extends Component {
  state = {
    key: "pk_live_b3e79fe819b2837687ebce841033308067458339", //PAYSTACK PUBLIC KEY
    email: "foobar@example.com", // customer email
    amount: 100, //equals NGN100,
  };

  callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  componentDidMount() {
    this.props.vc(
      this.refs.video,
      this.props.newdata.meid,
      this.props.newdata.key
    );
  }

  render() {
    let {
      video,
      title,
      pics,
      fullname,
      meid,
      key,
      likes,
      dislikes,
      commentsList,
      view,
      cinema,
      amount,
      email,
      viewingt,
      caption,
    } = this.props.newdata;
    const {
      history,
      disLikes,
      addLikes,
      me,
      addComment,
      user_meid,
    } = this.props;
    let commentno;
    let amount1 = amount * 100;
    if (commentsList === undefined) {
      commentno = 0;
    } else {
      commentno = commentsList.length;
    }
    viewingt = new Date(viewingt);
    viewingt = viewingt.toString("YYYY-MM-dd");

    return (
      <div className="card card1 ">
        <div>
          <div className="card-header1">
            <div>
              <div className="">
                {pics !== null ? (
                  <img src={pics} className="userimage1" alt={fullname} />
                ) : (
                  <i className="fas fa-user icon-person" />
                )}
              </div>
              <div className="desc">
                <p> Showing at {cinema}</p>
                <p>Movie Title : {title}</p>
                <p>Ticket @ {`${amount} naira`}</p>
                <p>{viewingt}</p>
              </div>
              <p className="caption">{caption}</p>
            </div>
          </div>
          <div>
            <video
              src={video}
              className="videon"
              ref="video"
              controls
              type="video/mp4"
            />
            <PaystackButton
              text="Buy Ticket"
              class="payButton button white"
              callback={this.callback}
              close={this.close}
              disabled={false}
              embed={false}
              reference={this.getReference()}
              email={email}
              amount={amount1}
              paystackkey={this.state.key}
              tag="button"
            />
          </div>
          <div className="socialbuttons mx-auto">
            <span
              className="block"
              onClick={() => {
                me !== null
                  ? addLikes(meid, key, user_meid)
                  : history.push(`/login`);
              }}
            >
              <span className="soc">{likes === 0 ? null : likes}</span>
              <span>
                <i className="fas fa-heart social-icon " />
              </span>
              <span className="icon-text">Like</span>
            </span>
            <span
              className="block"
              onClick={() => (me !== null ? null : history.push(`/login`))}
            >
              <span className="soc">{commentno === 0 ? null : commentno}</span>
              <span>
                <i className="far fa-comment social-icon" />
              </span>
              <span className="icon-text">Comment</span>
            </span>
          </div>
          <div className="views">
            <p className="view-p">
              {view === 0 ? null : view > 1 ? `${view} views` : `${view} view`}{" "}
            </p>
          </div>
          <div ref={this.myRef} />
          <div className="write-comment">
            <div
              className="write"
              onKeyUp={(evt) => addComment(evt, meid, key)}
              contentEditable
              data-text="Write a comment ...."
            />
          </div>

          {commentsList === undefined ? (
            <div />
          ) : (
            <div>
              {commentsList.map((item) => {
                if (item !== null) {
                  return (
                    <div className="commentlist" key={item.time}>
                      <span>
                        <img className="cimg" src={item.pics} alt="" />
                      </span>
                      <div className="comment">
                        <span className="cname">{item.name}</span>
                        <span>{item.comment}</span>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cinema2;
