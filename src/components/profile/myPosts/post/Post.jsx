import React from 'react'
import classes from './Post.module.css'

function Post({image, postName, userName, message, likes, comments}) {
    return (
        <div className={classes.item}>
            <img src={image} alt='' />
            <div className={classes.itemContent}>
                <div>
                    {postName}
                </div>
                <div>
                    {userName}
                </div>
                <div>
                    {message}
                </div>
                <div className={classes.promotion}>
                    <span>likes {likes}</span>
                    <span>comments {comments}</span>
                </div>
            </div>
        </div>
    )
}

export default Post
