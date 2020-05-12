import React, { Component } from 'react';
import { FormErrors } from "../../FormErrors/FormErrors";
import { compose } from "redux";
import { connect } from "react-redux"

import { signUp } from "../../store/actions/signUp";
import './styles.css';
import facebook from "../../img/facebook.png";
import google from "../../img/google.png";

class SignPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {name: '', email: '', password: '', confirmPassword: ''},
            nameValid: false,
            emailValid: false,
            passwordValid: false,
            confirmPasswordVaild: false,
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
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordVaild = this.state.confirmPasswordVaild;

        switch(fieldName) {
            case 'name' :
                nameValid = value.length >=3;
                fieldValidationErrors.Name = nameValid ? '' : ' is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.Password = passwordValid ? '': ' is too short';
                break;
            case 'confirmPassword':
                confirmPasswordVaild = this.state.password === value;
                fieldValidationErrors['Confirm Password'] = confirmPasswordVaild ? '': ' does not match';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordVaild: confirmPasswordVaild,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordVaild});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    goToLogIn =() => {
        this.props.history.push("/Login");
        console.log(this.props)
    }

    SignUpNow =() => {
       signUp({name: this.state.name, email: this.state.email, password: this.state.password})
        console.log({name: this.state.name, email: this.state.email, password: this.state.password})
        this.setState({name:'', email:'', password:'', confirmPassword:''})
    }



    render () {
        return (
            <form>
                <div className='log_in'>
                    <p>Already have an account?</p>
                    <a className='headerlink' onClick={this.goToLogIn}>Log In</a>
                </div>
                <div className='signForm'>
                <h2 className='sign'>Sign Up</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                    <p className='name_email_password'>Name</p>
                    <input type="name" required className="form-control" name="name"
                           placeholder="Name"
                           value={this.state.name}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <p className='name_email_password'>E-mail</p>
                    <input type="email" required className="form-control" name="email"
                           placeholder="E-mail"
                           value={this.state.email}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <p className='name_email_password'>Password</p>
                    <input type="password" required className="form-control" name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
                    <p className='name_email_password'>Confirm Password</p>
                    <input type="password" required className="form-control" name="confirmPassword"
                           placeholder="Confirm Password"
                           value={this.state.confirmPassword}
                           onChange={this.handleUserInput}  />
                </div>
                </div>
                <div className='sign_up_btn'>
                    <button type="submit" className="btn_sign_page btn-primary" disabled={!this.state.formValid} onClick={this.SignUpNow} >Sign Up Now</button>
                    <p>or</p>
                    <img src={facebook} alt="Facebook"/>
                    <img src={google} alt="Google"/>
                </div>
            </form>
        )
    }
}


const mapDispatchToProps = {
    singUp: signUp,
}

export default compose(
    connect(null, mapDispatchToProps),
)(SignPage)
