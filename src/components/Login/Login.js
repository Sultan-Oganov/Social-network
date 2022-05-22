import React from 'react'
import './Login.css'
import LoginReduxForm from './LoginForm/LoginForm'

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
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

export default Login