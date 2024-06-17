//import { useContext } from 'react';
//import StoreContext from '../../../StoreContext';
import { addPostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//     //let state = props.store.getState()


//     function onAddPost() {
//         store.dispatch(addPostActionCreator())
//     }

//     function onPostTextChange(text) {
//         store.dispatch(updateNewPostTextActionCreator(text))
//     }

//     const store = useContext(StoreContext)

//     return (
//         <MyPosts
//             addPost={onAddPost}
//             updateNewPostText={onPostTextChange}
//             postsData={store.getState().profilePage.postsData}
//             newPostText={store.getState().profilePage.newPostText}
//         />
//     )
// }

// export default MyPostsContainer

let mapSateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer



