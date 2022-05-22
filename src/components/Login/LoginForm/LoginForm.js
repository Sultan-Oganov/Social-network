import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControl/FormsControl';
import { required } from '../../../utils/validators/index';

const LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                className='form__input'
                placeholder='Email'
                name='email'
                component={Input}
                validate={required}
            />
            <Field
                className='form__input'
                placeholder='Password'
                name='password'
                component={Input}
                validate={required}
            />
            <label className='form__remember-me'>
                <Field name='rememberMe' component={Input} type="checkbox" />
                <span className='form__text'>remember me</span>
            </label>
            <button className='form__btn form__signup'>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;