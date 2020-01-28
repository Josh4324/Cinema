import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
          };
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { email, password } = this.state;
        if (onSubmit) {
          onSubmit(email, password)
          if (this.props.err){
              this.setState({email:''})
              this.setState({password:''})
          }
          
        }  
    };



    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
      };

    
    render() {
        const { email, password } = this.state;
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
                        <div className= { this.props.submitting ? 'lds-ring' : null   } ><div></div><div></div><div></div><div></div></div>
                        <div className={ this.props.err ? 'err': 'nothing' }>Email and Password do not match, please try again </div>
                    </form>
                    <a className="forgot" href="/login">Forgot Your Password?</a>
                </div>
                    <p className="acc">Dont have an Account <a href="/register" className="reg">Sign up here</a></p>
            </div>
        )
    }
}






