import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            submitting: false
          };
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { email, password } = this.state;
        if (onSubmit) {
          this.setState({ submitting: true });
          onSubmit(email, password);
        }
    };

    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
      };

    
    render() {
        const { email, password, submitting } = this.state;
        return (
            <div className="form_block">


                <div className="title"> {this.state.formTitle}  </div>

                <div className="body">
                    <h3 className="log">Login</h3>
                  
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Enter your email" className="input" type="email"
                        onChange={this.handleChange("email")}
                        name="email" value={email}
                        />

                        <input placeholder="Enter your password" className="input" type="password"
                        onChange={this.handleChange("password")}
                        name="password"  value={password}
                        />

                        <input type="submit" className="input submit" value="Sign In"/>
                    </form>
                    <a className="forgot" href="/login">Forgot Your Password?</a>
                </div>
                    <p className="acc">Dont have an Account <a href="/register" className="reg">Sign up here</a></p>
            </div>
        )
    }
}






