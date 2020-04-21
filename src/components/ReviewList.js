import React, { Component } from "react";
import Review1 from "./Review1";

class ReviewList extends Component {
  state = {
    mount: false,
  };

  componentDidMount() {
    this.setState({ mount: true });
  }

  render() {
    const {
      history,
      logState,
      data,
      disLikes,
      addLikes,
      me,
      addComment,
      vc,
    } = this.props;
    let user_meid;
    if (me) {
      user_meid = JSON.parse(localStorage.getItem("me")).uid;
    }
    let datalist = [];
    if (data !== null) {
      Object.keys(data).map((key) => {
        let newdata = data[key];
        return Object.keys(newdata).map((key) => {
          if (newdata[key].role === "User") {
            return datalist.push(newdata[key]);
          }
        });
      });

      function compare(a, b) {
        const time1 = a.postt;
        const time2 = b.postt;

        let comparison = 0;
        if (time1 > time2) {
          comparison = 1;
        } else if (time1 < time2) {
          comparison = -1;
        }
        return comparison * -1;
      }
    }
    return (
      <div>
        {this.state.mount === false ? (
          <div />
        ) : (
          <div className="contain py-3">
            <div className="container1">
              <div className="row">
                {datalist.map((data) => {
                  return (
                    <Review1
                      me={me}
                      vc={vc}
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
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ReviewList;
