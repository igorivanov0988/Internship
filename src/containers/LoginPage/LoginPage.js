import React, { Component } from 'react';
import { FormErrors } from "../../FormErrors/FormErrors";
import { useHistory } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";


import { login } from "../../store/actions/auth";
import './styles.css';
import google from '../../img/google.png'
import facebook from '../../img/facebook.png'

class LoginPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.Password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }


    logIn =() => {
        this.props.history.push("/CreatePostPage")
         }

    goToSingUp =() => {
        this.props.history.push("/Sing");
        console.log(this.props)
    }

    goToForgot =() => {
        this.props.history.push("/ForgotYourPassword");
        console.log(this.props)
    }


    render () {

        return (
            <form>
                <div className='sing_up'>
                    <p>Don't have an account?</p>
                    <a className='headerlink' onClick={this.goToSingUp}>Sing up</a>
                </div>
                <div className="loginForm">
                <h2 className='log'>Log in</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <p className='email_password'>E-mail</p>
                    <input type="email" required className="form-control" name="email"
                           placeholder="E-mail"
                           value={this.state.email}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <p className='email_password'>Password</p>
                    <input type="password" required className="form-control" name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                </div>
                </div>
                <div className='loginnow_btn'>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.logIn}>Log In Now</button>
                    <a onClick={this.goToForgot}>Fogot your password? <br/>or</a>
                </div>
                <div className='footer'>
                    <p>Log In with:</p>
                    <img src={facebook} alt="Facebook"/>
                    <img src={google} alt="Google"/>
                </div>

            </form>
        )
    }
}

const mapDispatchToProps = {
    login,
}

export default compose(
    connect(null, mapDispatchToProps),
)(LoginPage)
