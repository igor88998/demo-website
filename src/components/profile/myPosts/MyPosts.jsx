import React, { memo } from 'react'
import classes from './MyPosts.module.css'
import Post from './post/Post'
import MyPostsReduxForm from './myPostsForm/MyPostsForm'

const MyPosts = ({ postsData, addPost }) => {

    let postsElements = postsData.map(post => {
        return <Post
            key={post.id}
            image={'/UserAvatar.png'}
            postName={post.postName}
            userName={post.userName}
            message={post.message}
            likes={post.likesCount}
            comments={post.comments}
        />
    })

    function onAddPost(values) {
        addPost(values.newPostText)
    }

    return (
        <div className={classes.content}>
            <div>
                <div className={classes.myPost}>
                    My posts
                </div>
                <div className={classes.createPost}>
                    <div className={classes.createPostName}>Create new post</div>
                    <MyPostsReduxForm onSubmit={onAddPost} />
                </div>
                <div>
                    <div className={classes.newPost}>
                        Posts
                    </div>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default memo(MyPosts)
