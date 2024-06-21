import React from 'react';
import classes from '../ProfileInfo.module.css'
import ProfileStatus from './profileStatus/ProfileStatus';

const ProfileDataWithHooks = ({ isOwner, goToEditMode, profile, status, updateUserStatus }) => {
    
    return (
        <div className={classes.profileContainer}>
            <div className={classes.userInfo}>
                <div>
                    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

                    <div className={classes.userName}>
                        Full name: {profile.fullName}
                    </div>
                    
                    <div>
                        About me: {profile.aboutMe}
                    </div>
                    <div>
                        Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                        {profile.lookingForAJob && (
                        <div className={classes.contacts}>
                            My professional skills: {profile.lookingForAJobDescription}
                        </div>
                        )}
                    <ProfileStatus  status={status} updateUserStatus={updateUserStatus}/>

                </div>
            </div>
            <div className={classes.contacts}>
                <strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>{contactTitle}: {contactValue}</div>
    )
}

export default ProfileDataWithHooks;