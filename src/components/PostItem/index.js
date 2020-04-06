import React from 'react';

import './styles.css'

function PostHeader({ author, date, content }) {
    return (
        <>
            <div className="headerContainer">
                <img src={author.avatar} alt="Perfil do usuário"/>
                <div className="profile">
                    <span>{author.name}</span>
                    <p>{date}</p>
                </div>
            </div>
            <p class="content">{content}</p>
        </>
            
    );
}

function PostComment({ comments }) {
    return (
        <div className="commentContainer">
            {
                comments.map(comment => (
                    <div key={comment.id} className="commentProfile">
                        <img src={comment.author.avatar} alt=""/>
                        <div className="message">
                            <p> <span>{comment.author.name}</span>{comment.content}</p>
                        </div>
                    </div>
                ))
            }    
        </div>
    );
}

function PostItem({author, date, content, comments}) {
    return (
        <div className="post">
            <PostHeader author={author} date={date} content={content}/>
            <div className="hr">
            <hr />
            </div>
            <PostComment comments={comments}/>
        </div>
    );
}


export default PostItem;
