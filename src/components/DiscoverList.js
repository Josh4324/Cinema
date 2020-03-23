import React, { Component } from "react";
import Discover1 from "./Discover1";

class CinemaList extends Component {
  state = {
    mount: false
  };

  componentDidMount() {
    this.setState({
      mount: true
    });
  }

  render() {
    const {
      history,
      logState,
      data,
      disLikes,
      addLikes,
      me,
      addComment
    } = this.props;
    let user_meid;
    if (me) {
      user_meid = JSON.parse(localStorage.getItem("me")).uid;
      console.log(user_meid);
    }
    let datalist = [];
    if (data !== null) {
      Object.keys(data).map(key => {
        let newdata = data[key];
        return Object.keys(newdata).map(key => {
          return datalist.push(newdata[key]);
        });
      });

      function compare(a, b) {
        let totalnum1, totalnum2;
        if (a.commentsList === undefined || b.commentsList === undefined) {
          totalnum1 = a.dislikes + a.likes;
          totalnum2 = b.dislikes + b.likes;
        } else {
          totalnum1 = a.dislikes + a.likes + a.commentsList.length;
          totalnum2 = b.dislikes + b.likes + b.commentsList.length;
        }

        let comparison = 0;
        if (totalnum1 > totalnum2) {
          comparison = 1;
        } else if (totalnum1 < totalnum2) {
          comparison = -1;
        }
        return comparison * -1;
      }

      datalist.sort(compare);
      console.log(datalist);
    }
    return (
      <div>
        {this.state.mount === false ? (
          <div> </div>
        ) : (
          <div className="contain py-3">
            <div className="container1">
              <div className="row">
                {datalist.map(data => {
                  return (
                    <Discover1
                      me={me}
                      user_meid={user_meid}
                      addComment={addComment}
                      key={data.key}
                      disLikes={disLikes}
                      addLikes={addLikes}
                      newdata={data}
                      history={history}
                      logState={logState}
                    />
                  );
                })}{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default CinemaList;
