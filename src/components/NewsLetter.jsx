import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-[#000300] w-full text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text:2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className=' w-full rounded-md p-3 text-black flex' type="email" placeholder="Enter your email" />
                        <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-4'>Notify me</button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-[#00df9a]'><a href='/'>Privacy Policy.</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter