import React, { Component } from 'react'
import fire from '../config/fire';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            user: null,
            
        };
    }

    componentDidMount(){
       
    }

    
    

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }


    render() {
        return (
            <div className="form_block">


                <div className="title"> {this.state.formTitle}  </div>

                <div className="body">
                    <h3 className="log">Login</h3>
                  
                    <form>
                        <input placeholder="Enter your email" className="input" type="email" value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        />

                        <input placeholder="Enter your password" className="input" type="password" value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        />

                        <input type="submit" className="input submit" onClick={this.login} value="Sign In"/>
                    </form>
                    <a className="forgot" href="/login">Forgot Your Password?</a>
                </div>
                    <p className="acc">Dont have an Account <a href="/register" className="reg">Sign up here</a></p>
            </div>
        )
    }
}






