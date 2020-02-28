import React, { Component } from 'react'

export default class Register extends Component {
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
        
        onSubmit(email, password);
    };

    
    handleChange = key => e => {
        this.setState({ [key]: e.target.value });
    };



    render() {
        const { email, password} = this.state;
        return (
            <div className="form_block">


            <div className="title"> {this.state.formTitle}  </div>

            <div className="body">
                <h3 className="log">Register</h3>
                
                <form onSubmit={this.handleSubmit} className="frm">
                    <input placeholder="Enter your email" className="input" type="email" 
                    onChange={this.handleChange("email")}
                    name="email" value={email}
                    />

                    <input placeholder="Enter your password" className="input" type="password" 
                    onChange={this.handleChange("password")}
                    name="password"  value={password}
                    />

                    <input type="submit" className="submit"  value="Register"/>
                    <div className= { this.props.submitting ? 'lds-ring' : null   } ><div></div><div></div><div></div><div></div></div>
                    <div className={ this.props.err ? 'err': 'nothing' }>Error , please try again </div>
                </form>
               
            </div>
                <p className="acc">Already have an Account <a href="/login" className="reg">Log in here</a></p>
        </div>
    )
        
    }
}

