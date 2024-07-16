import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className='mx-auto text-center md:w-3/12 my-8 '>
                <p className='text-yellow-600 mb-2'>{subHeading}</p>
                <h3 className='text-3xl uppercase border-y-4 p-4 font-bold'>{heading}</h3>
            </div>
        </>
    )
}

export default SectionTitle