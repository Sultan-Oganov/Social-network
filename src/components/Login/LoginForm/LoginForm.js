import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className='form__input' placeholder='Login' name='login' component={'input'} />
            <Field className='form__input' placeholder='Password' name='password' component={'input'} />
            <label className='form__remember-me'>
                <Field name='rememberMe' component={'input'} type="checkbox" />
                <span className='form__text'>remember me</span>
            </label>
            <button className='form__btn form__signup'>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;