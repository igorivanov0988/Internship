import React, { Component } from 'react';
import { FormErrors } from "../../FormErrors/FormErrors";
import { compose } from "redux";
import { connect } from "react-redux";

import './styles.css';

class ForgotYourPasswordPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            formErrors: {email: ''},
            emailValid: false,
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

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    handleReset = () => {
        console.log('RESET')
    }

    goToLoginPage = () => {
        this.props.history.push("/Login");
    }

    render () {
        return (
            <form>
                <div className="forgotPassword">
                <h2>Forgot Your Password?</h2>
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
                <div>
                    <button type="submit" className="btn_fogot btn-primary" onClick={this.handleReset}>Reset</button>
                    <button type="submit" className="btn_fogot btn-primary" onClick={this.goToLoginPage}>Back</button>
                </div>
                </div>
            </form>
        )
    }
}

export default ForgotYourPasswordPage;