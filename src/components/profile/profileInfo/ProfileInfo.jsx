import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileDataWithHooks from './profileData/ProfileDataWithHooks';
import LegoLogo from '../../../assets/images/LegoLogo.png'
import ProfileDataForm from './profileData/profileDataForm/ProfileDataForm'
import userAvatar from '../../../assets/images/userAvatar.png'

function ProfileInfo({ profile, saveProfile, saveUserPhoto, isOwner, status, updateUserStatus }) {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            saveUserPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div>
                <img className={classes.mainPicture} src={LegoLogo} alt='lego' />
            </div>

            <div className={classes.allData}>
                <div className={classes.photoContainer}>
                    <div>
                        <img className={classes.myAvatar} src={profile.photos.large || userAvatar} alt='' />
                    </div>
                    {isOwner && (
                        <>
                            <label htmlFor="file-upload" className={classes.photoChangeButton}>Upload photo</label>
                            <input id="file-upload" type={'file'} className={classes.photoChange} onChange={onMainPhotoSelected} />
                        </>
                    )}
                </div>
                <div>
                    {editMode
                        ? <ProfileDataForm 
                            onSubmit={onSubmit} 
                            initialValues={profile} 
                            isOwner={isOwner}
                            status={status}
                            profile={profile}
                            updateUserStatus={updateUserStatus}/>
                        : <ProfileDataWithHooks
                            goToEditMode={() => { setEditMode(true) }}
                            isOwner={isOwner}
                            profile={profile}
                            status={status}
                            updateUserStatus={updateUserStatus}
                        />}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
