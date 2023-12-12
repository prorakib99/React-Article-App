import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className='container mx-auto px-8'>
            <div className='flex flex-col gap-10'>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;