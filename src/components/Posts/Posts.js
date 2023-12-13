import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Bookmark from '../Bookmark/Bookmark';
import toast, { Toaster } from 'react-hot-toast';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [readTime, setReadTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    // toaster Added
    const successNotify = () => toast.success('Successfully Added!');
    const errorNotify = () => toast.error('Already Added!');


    // Add Bookmark Event handler
    const addBookmark = bookmarkPosts => {
        
        const exits = bookmarks.find(post => post.id === bookmarkPosts.id);

        if(exits){
            errorNotify();
            return;
        }
        successNotify();

        const newBookmarks = [...bookmarks, bookmarkPosts];
        setBookmarks(newBookmarks);
        
    }
    
    // Mark as Read Function Event Handler
    const markRead = posts => {
        const updateTime = posts.readTime + readTime;
        setReadTime(updateTime);
        successNotify();
    }

    return (
        <div className='container mx-auto px-8'>
             <Toaster />
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 py-8'>
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