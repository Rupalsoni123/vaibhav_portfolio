import React from 'react'

const SectionHeading = ({ heading, secondHeading }) => {
    return (
        <div className="pb-8 text-gray-900 dark:text-white relative">
            <div className="absolute left-0 top-0 h-12 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
            <h2 className='text-4xl pl-4 font-bold relative'>
                {heading}
                <span className="absolute -bottom-2 left-4 w-20 h-1 bg-cyan-500"></span>
            </h2>
            {secondHeading && (
                <p className='py-6 text-lg pl-4 text-gray-700 dark:text-gray-300 max-w-2xl'>
                    {secondHeading}
                </p>
            )}
        </div>
    )
}

export default SectionHeading;
