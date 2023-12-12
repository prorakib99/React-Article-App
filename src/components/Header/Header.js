import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto px-8'>
            <div className='flex justify-between items-center py-5 lg:py-9 border-b border-neutral-900 border-opacity-20'>
                <div>
                    <h2><a className='text-neutral-900 text-xl lg:text-[40px] font-bold leading-[64px]' href="./">React Article App</a></h2>
                </div>
                <div>
                    <img className='w-[60px] h-[60px] rounded-full' src="https://avatars.githubusercontent.com/u/34921044?s=400&u=2d4850c1b6b06be24580f5605dd5b9f34e329262&v=4" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;