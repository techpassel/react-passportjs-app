import React from 'react'
import { posts } from '../data';
import '../App.scss'
import { useLocation, useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    return (
        <div className='post'>
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post;