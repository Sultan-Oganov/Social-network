import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const AddNewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Enter post text" />
            </div>
            <button>Add post</button>
        </form>
    );
};
const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
export default AddNewPostReduxForm;