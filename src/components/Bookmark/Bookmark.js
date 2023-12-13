import React from 'react';

const Bookmark = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600'>
                <p className="text-indigo-600 text-2xl font-bold leading-[38.40px] p-5">Spent time on read : 177 min</p>
            </div>
            <div className='min-h-[50vh] bg-neutral-900 bg-opacity-5 rounded-lg px-[30px] py-6 text-left'>
                <h5 className="text-neutral-900 text-2xl font-bold leading-[38.40px] mb-4">Bookmarked Blogs : 8</h5>
                <div className='flex flex-col gap-4'>
                    <div className="bg-white rounded-lg">
                        <p className="text-neutral-900 text-lg p-5 font-semibold leading-[28.80px]">Master Microsoft Power Platform and Become an In-Demand!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;