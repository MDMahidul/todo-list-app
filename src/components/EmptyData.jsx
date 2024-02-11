import React from 'react';

const EmptyData = ({text}) => {
    return (
        <div className='flex justify-center min-h-[80vh] md:min-h-[60vh] items-center text-gray-400 text-xl md:text-2xl'>
            {text}
        </div>
    );
};

export default EmptyData;