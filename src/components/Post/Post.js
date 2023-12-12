import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const { id, name, userImg, images, title, tag, postDate, readTime } = props.post;
    // const hashTag = tag.map(t => )
    return (
        <div className='lg:w-[845px]'>
            <div>
                <img className='w-full rounded-lg' src={images} alt="" />
            </div>
            <div className='flex items-center justify-between mt-9 mb-5'>
                <div className='flex items-center gap-6'>
                    <img className="w-[60px] h-[60px] rounded-full" src={userImg} alt='' />
                    <div className='text-left'>
                        <h5 className="text-neutral-900 text-2xl font-bold leading-[38.40px]">{name}</h5>
                        <p className="text-neutral-900 text-opacity-60 text-base font-semibold leading-relaxed">{postDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="text-right text-neutral-900 text-opacity-60 text-xl font-medium">{readTime} min read</p>
                    <button>
                        <FontAwesomeIcon icon={faBookmark} size="lg" />
                    </button>
                </div>
            </div>
            <div className='text-left'>
                <h3 className="w-[737px] text-neutral-900 text-[40px] font-bold leading-[64px]">{title}</h3>
                <p className="text-neutral-900 text-opacity-60 text-xl font-medium leading-loose">#beginners</p>
            </div>
        </div>
    );
};

export default Post;