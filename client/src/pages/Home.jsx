import React from "react";
import Card from "../components/Card";
import { posts } from '../data';
import '../App.scss'

const Home = () => {
    return (
        <div className="home">
            {posts.map(post => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Home;