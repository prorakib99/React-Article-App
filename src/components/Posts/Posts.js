import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Bookmark from '../Bookmark/Bookmark';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [readTime, setReadTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    // Add Bookmark Event handler
    const addBookmark = posts => {
        const newBookmarks = [...bookmarks, posts];
        setBookmarks(newBookmarks);
    }

    // Mark as Read Function Event Handler
    const markRead = posts => {
        const updateTime = posts.readTime + readTime;
        setReadTime(updateTime);
    }
    console.log(readTime);
    return (
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-[2fr_1fr] gap-6 py-8'>
                <div className='flex flex-col gap-10'>
                    {
                        posts.map(post => <Post key={post.id} addBookmark={addBookmark} markRead={markRead} post={post}></Post>)
                    }
                </div>
                <div>
                    <Bookmark bookmarks={bookmarks} readTime={readTime}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Posts;