import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';

const Profile = ({ profile, status, updateUserStatus }) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
