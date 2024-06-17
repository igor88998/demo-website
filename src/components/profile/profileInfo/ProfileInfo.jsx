import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
//import ProfileStatus from './profileStatus/ProfileStatus'
import ProfileStatusWithHooks from './profileStatus/ProfileStatusWithHooks';


function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    } 
    return (
        <div>
            <div>
                <img className={classes.mainPicture} src='/LegoLogo.png' alt='lego' />
            </div>

            <div className={classes.profileContainer}>
                <ProfileStatusWithHooks {...props} status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo
