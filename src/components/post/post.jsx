import React from 'react';
import {ReactComponent as VeridiedLogo} from '../../assets/images/verified-icon.svg';
import {ReactComponent as NavigateArrow} from '../../assets/images/navigate-arrow.svg';
import {ReactComponent as Share} from '../../assets/images/share.svg';
import Likes from '../likes/likes.jsx';
import Comments from '../comments/comments.jsx';
import Reposts from '../reposts/reposts.jsx';
import './post.css'

const Post = ({name, photo, nickname, date, content, image, likes, comments, reposts}) => {
    return(
        <div className="post-container">
            <div className="profile-picture">
                <div className="profile-picture--container">
                    <img src={photo} alt="Profile pic"/>
                </div>
            </div>
            <div className="post">
                <div className="header-info">
                    <h3>{name}</h3>
                    <VeridiedLogo/>
                    <p>{nickname}</p>
                    <p>&#8231;</p>
                    <p>{date}</p>
                    <NavigateArrow/>
                </div>
                <p className="content">{content}</p>
                <div className="post-image">
                    <img src={image} alt="Feed post img"/>
                </div>
                <div className="post-activity">
                    <Likes likes={likes}/>
                    <Comments comments={comments}/>
                    <Reposts reposts={reposts}/>
                    <Share/>
                </div>
            </div>
        </div>
    )
}

export default Post;