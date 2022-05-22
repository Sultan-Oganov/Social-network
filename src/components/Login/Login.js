import React from 'react'
import './Login.css'
import LoginReduxForm from './LoginForm/LoginForm'
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';

const Login = ({ isAuth, login }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }

    if (isAuth) return <Redirect to="/profile" />

    return (
        <div className='form'>
            <div className="form__content">
                <h1 className='form__title'>LOGIN</h1>
                <LoginReduxForm {...{ onSubmit }} />
                {/* <LoginReduxForm onSubmit={onSubmit} /> */}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login); 