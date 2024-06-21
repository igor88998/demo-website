import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, TextArea } from '../../../../common/formsControls/FormsControls';
import classes from './../../ProfileInfo.module.css'
import ProfileStatus from '../profileStatus/ProfileStatus';

const ProfileDataForm = ({ handleSubmit, isOwner, status, updateUserStatus, profile, error }) => {
    return (
        <form className={classes.profileContainer} onSubmit={handleSubmit}>
            <div className={classes.userInfo}>
                <div>
                    {isOwner && <div><button>Save</button></div>}

                    {error && <div className={classes.formSummaryError}>
                        {error}
                    </div>}

                    <div className={classes.userName}>
                        Full name: <Field placeholder='Full name' name='fullName' component={Input} validate={[]} />
                    </div>

                    <div>
                        About me: <Field placeholder='About me' name='aboutMe' component={TextArea} validate={[]} />
                    </div>
                    <div>
                        Looking for a job: <Field name='lookingForAJob' component={Input} props={{ type: 'checkbox' }} validate={[]} />
                    </div>
                    <div>
                        My professional skills: <Field placeholder='My professional skills' name='lookingForAJobDescription' component={TextArea} validate={[]} />
                    </div>

                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} />

                </div>
            </div>
            <div className={classes.contacts}>
                <strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {key}: <Field placeholder={key} name={'contacts.' + key} component={Input} validate={[]} />
                    </div>
                })}
            </div>
        </form>
    );
};



const ProfileDataReduxForm = reduxForm({
    form: 'profileData',
    destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileDataReduxForm;