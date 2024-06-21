import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';

const Profile = ({ profile, status, updateUserStatus, isOwner, saveUserPhoto, saveProfile }) => {

    return (
        <div>
            <ProfileInfo 
                profile={profile} 
                status={status} 
                updateUserStatus={updateUserStatus} 
                isOwner={isOwner} 
                saveUserPhoto={saveUserPhoto}
                saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
