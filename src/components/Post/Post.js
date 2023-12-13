import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const { name, userImg, image, title, tags, postDate, readTime } = props.post;
    const addBookmark = props.addBookmark;
    const markRead = props.markRead;
    return (
        <div className='w-full border-b border-neutral-900 border-opacity-10 pb-10'>
            <img className='w-full rounded-lg shadow-xl' src={image} alt="" />
            <div className='flex items-start items-center justify-between mt-5 lg:mt-9 mb-5'>
                <div className='flex lg:items-center gap-2 lg:gap-6 flex-col lg:flex-row'>
                    <img className="w-[60px] h-[60px] rounded-full" src={userImg} alt='' />
                    <div className='text-left'>
                        <h5 className="text-neutral-900 text-lg lg:text-2xl font-bold leading-6 pb-2 lg:pb-0 lg:leading-[38.40px]">{name}</h5>
                        <p className="text-neutral-900 text-opacity-60 text-base font-semibold leading-relaxed">{postDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className="text-right text-neutral-900 text-opacity-60 text-xl font-medium">{readTime} min read</p>
                    <button onClick={() => addBookmark(props.post)} className='focus:text-green-600'>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />
                    </button>
                </div>
            </div>
            <div className='lg:text-left mt-8'>
                <h3 className="text-neutral-900 text-xl lg:text-[40px] font-bold lg:leading-[64px]">{title}</h3>
                <div className='flex items-center justify-center lg:justify-start gap-4 my-6 lg:my-4 flex-wrap'>
                    {
                        tags.map(tag => <p className="text-neutral-900 text-opacity-60 text-xl font-medium lg:leading-loose">{tag}</p>)
                    }
                </div>
                <button onClick={() => markRead(props.post)} className="text-indigo-600 text-xl font-semibold underline hover:no-underline focus:text-indigo-900">Mark as read</button>
            </div>
        </div>
    );
};

export default Post;