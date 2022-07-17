import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss'

const Card = ({ post }) => {
    return (
        <div className="card">
            <span className="title">{post.title}</span>
            <Link to={`/post/${post.id}`} className="link">
                <img src={post.img} alt="" className="cardImg" />
            </Link>
            <p className="desc">{post.desc}</p>
            <Link to={`/post/${post.id}`} className="link">
                <button className="cardButton">Read More</button>
            </Link>

        </div>
    )
}

export default Card;