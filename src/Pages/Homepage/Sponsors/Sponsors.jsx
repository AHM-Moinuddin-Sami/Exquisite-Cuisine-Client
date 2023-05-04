import React from 'react';

const Sponsors = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-transparent via-black mt-6'>
                <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Our Partners</h3>
            </div>
            <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-orange-400 via-red-600 to-orange-400"></div>
            <div className='flex flex-col md:flex-row items-center flex-wrap justify-between p-2 rounded bg-white'>
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-bon-appetit.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-the-kitchn.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-the-new-yorker.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-readers-digest.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-buzzfeed.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-the-japan-times.png" alt="" />
                <img src="https://www.justonecookbook.com/wp-content/uploads/2022/10/press-huffington-post.png" alt="" />
            </div>
        </div>
    );
};

export default Sponsors;