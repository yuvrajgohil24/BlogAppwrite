import React from 'react'

function Container({ children }) {
    // for single line we remove the parenthesis after the return keyword.
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container
