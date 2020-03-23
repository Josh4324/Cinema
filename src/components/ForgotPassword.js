import React, { Component } from "react";
import { firebase } from "../config/fire";

class ForgotPassword extends Component {
  state = {
    sent: false
  };
  render() {
    const auth = firebase.auth();
    let email = "";
    const resetEmail = evt => {
      evt.preventDefault();
      console.log("seen");
      email = this.refs.email.value;
      let that = this;
      console.log(email);
      auth
        .sendPasswordResetEmail(email)
        .then(function(res) {
          console.log("email sent", res);
          that.refs.email.value = "";
          that.setState({ sent: true });
        })
        .catch(function(error) {
          console.log("error", error);
        });
    };

    return (
      <div className="form_block" onSubmit={resetEmail}>
        <div className="body">
          <h3 className="log"> Reset Password </h3>
          <form onSubmit={this.handleSubmit} className="frm">
            <input
              placeholder="Enter your email"
              className="input"
              type="email"
              ref="email"
            />
            <input type="submit" className="submit" value="Reset Password" />
            <p className={this.state.sent === true ? null : "outt"}>
              Email sent Successfully
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
