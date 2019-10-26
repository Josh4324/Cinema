import React, { Component } from 'react'
import fire from '../config/fire';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            user:null,
            redirect: false
        };
    }

    
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    register = e => {
        
    }

    render() {
        return (
            <div className="form_block">


            <div className="title"> {this.state.formTitle}  </div>

            <div className="body">
                <h3 className="log">Register</h3>
                
                <form>
                    <input placeholder="Enter your email" className="input" type="email" value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    />

                    <input placeholder="Enter your password" className="input" type="password" value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    />

                    <input type="submit" className="input submit" onClick={this.register} value="Register"/>
                </form>
               
            </div>
                <p className="acc">Already have an Account <a href="/register" className="reg">Log in here</a></p>
        </div>
    )
        
    }
}

