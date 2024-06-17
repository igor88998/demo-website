import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../../../common/formsControls/FormsControls';
import classes from './../MyPosts.module.css'

const MyPostsForm = ({ handleSubmit, onAddPost }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addPostForm}>
                <div>
                    <Field className={classes.postText} placeholder={'Enter text'} name={'newPostText'} component={TextArea} />
                </div>
                <div>
                    <button className={classes.addPostButton} onClick={onAddPost}>Add post</button>
                </div>
            </div>
        </form>
    );
};

const MyPostsReduxForm = reduxForm({
    form: 'myPostsNewPost'
})(MyPostsForm)

export default MyPostsReduxForm;