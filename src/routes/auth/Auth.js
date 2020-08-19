import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';


import { signin } from '../../store/reducers/auth';
import { signup } from '../../store/reducers/auth';

import Snack from '../../components/Notification';
import { showSnack } from '../../store/reducers/snack';

import Img_Google from '../../assets/img/google.svg';
import './Auth.scss';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: 0,
            currency: 0,
            privacy: false,
            email: '',
            password: '',
            errorPolicy: false,
        }
    }

    Signin() {
        this.props.signin({
            body: {
                email: this.state.email,
                password: this.state.password
            },
            success: () => {
                this.props.history.push("/");
                this.props.showSnack({ message: "Successfully Logged in!", status: "success" });
            },
            fail: (err) => {
                this.props.showSnack({ message: err.response.data, status: "error" });
            },
        });
    }

    Singup() {
        if (this.state.privacy === false) {
            this.setState({
                errorPolicy: true,
            });
            return;
        };
        if (this.state.email === '' || this.state.password === '') return;
        let errors = this.validate();
        if (errors.email || errors.password) return;
        this.props.signup({
            body: {
                email: this.state.email,
                password: this.state.password,
                currency: this.state.currency
            },
            success: () => {
                this.setState({
                    formType: 0
                });
                this.props.showSnack({
                    message: 'Account created Successfully.',
                    status: 'success'
                });
            },
            fail: (err) => {
                this.props.showSnack({
                    message: err.response.data,
                    status: 'error'
                });
            }
        })
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    validate() {
        let errors = {};
        if (this.state.email && 
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
            errors.email = 'Invalid email address';
        }
        if (this.state.password.length > 0 && this.state.password.length < 6) {
            errors.password = "Password too short"
        }
        if (this.state.password.length >50) {
            errors.password = "Password too long"
        }
        return errors;
    }

    renderSignIn() {
        if(this.state.formType !== 0) return <div/>;
        return (
            <div className="auth__container">
                <div className="form__title">Login</div>
                <div className="social__buttons">
                    <div className="facebook_but">
                        f
                    </div>
                    <div className="google__but">
                        <img src={Img_Google} alt=''></img>
                    </div>
                </div>
                <TextField
                    style={{
                        marginTop: '20px'
                    }}
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={(e) => this.onEmailChange(e)}
                />
                <TextField
                    style={{
                        marginTop: '20px'
                    }}
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.onPasswordChange(e)}
                />
                <div className="forgot__text" onClick={() => {
                    this.setState({
                        formType: 2,
                        email: '',
                        password: '',
                    })
                }}>Forgot my password</div>
                <div className="sign__but" onClick={() => this.Signin()}>Sign in</div>
                <div className="page__ctrl">
                    <div className="description">No account?</div>
                    <div 
                        className="ctrl__but" 
                        onClick={() => { this.setState({
                            formType: 1,
                            password: '',
                            email: '',
                        })}}
                    >Create</div>
                </div>
            </div>
        );
    }

    renderSignUp() {
        if(this.state.formType !== 1) return <div/>;
        let errors = this.validate();
        return (
            <div className="auth__container">
                <div className="form__title">Create account</div>
                <div className="social__buttons">
                    <div className="facebook_but">
                        f
                    </div>
                    <div className="google__but">
                        <img src={Img_Google} alt=''></img>
                    </div>
                </div>
                <TextField
                    error={errors.email?true:false}
                    helperText={errors.email}
                    style={{
                        marginTop: '20px'
                    }}
                    label="Email"
                    variant="outlined"
                    value={this.state.email}
                    onChange={(e) => this.onEmailChange(e)}
                />
                <TextField
                    error={errors.password?true:false}
                    style={{
                        marginTop: '20px'
                    }}
                    label="Password"
                    variant="outlined"
                    type="password"
                    helperText={errors.password}
                    value={this.state.password}
                    onChange={(e) => this.onPasswordChange(e)}
                />
                <div className="password__dis">6-50 characters, letters (a-z), numbers</div>
                <div className="currency__buttons">
                    <div
                        onClick={() => { this.setState({currency: 0})} }
                        className={this.state.currency === 0? "currency_but first active" : "currency_but first"}
                    >$</div>
                    <div 
                        onClick={() => { this.setState({currency: 1})} }
                        className={this.state.currency === 1? "currency_but active" : "currency_but"}
                    >€</div>
                </div>
                <div className="privacy__cotainer" onClick={() => this.onPrivacyChange()}>
                    <Checkbox
                        checked={this.state.privacy}
                        color="primary"
                    />
                    <div className="policy__text">
                        I accept the terms of Client Agreement and Privacy Policy and confirm being aduit.
                    </div>
                </div>
                {this.state.errorPolicy?
                    <FormHelperText error>
                        Accept terms and conditions
                    </FormHelperText>:<div/>
                }
                <div className="sign__but" onClick={() => this.Singup()} style={{marginTop: '20px'}}>Create account</div>
                <div className="page__ctrl">
                    <div className="description">Have an account?</div>
                    <div 
                        className="ctrl__but" 
                        onClick={() => { 
                            this.setState({
                                formType: 0,
                                email: '',
                                password: '',
                                errorPolicy: false,
                            }) 
                        }}>Sign in</div>
                </div>
            </div>
        );
    }

    renderForgot() {
        if(this.state.formType !== 2) return <div/>;
        return (
            <div className="auth__container">
                <div className="form__title">Login</div>
                <div className="social__buttons">
                    <div className="facebook_but">
                        f
                    </div>
                    <div className="google__but">
                        <img src={Img_Google} alt=''></img>
                    </div>
                </div>
                <div className="forgot__dis">
                    Password reset link will be emailed to you
                </div>
                <TextField
                    style={{
                        marginTop: '20px'
                    }}
                    label="Email"
                    variant="outlined"
                />
                <div className="back__text" onClick={() => {
                    this.setState({
                        formType: 0,
                        email: '',
                        password: ''
                    })
                }}>Back</div>
                <div className="sign__but">Send</div>
                <div className="page__ctrl">
                    <div className="description">No account?</div>
                    <div 
                        className="ctrl__but" 
                        onClick={() => { 
                            this.setState({
                                formType: 1,
                                email: '',
                                password: ''
                            }) 
                        }}>Create</div>
                </div>
            </div>
        );
    }

    onPrivacyChange() {
        this.setState({
            privacy: !this.state.privacy,
            errorPolicy: this.state.privacy
        })
    }

    render() {
        return (
            <div className="Auth">
                <Snack/>
                {this.renderSignIn()}
                {this.renderSignUp()}
                {this.renderForgot()}
            </div>
        )
    }
}

Auth.propTypes = {
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    showSnack: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    error: state.auth.error,
});

const mapDispatchToProps = {
    signin: signin,
    signup: signup,
    showSnack: showSnack,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Auth);