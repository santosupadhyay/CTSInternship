import React from 'react'

export default function BlogCard({ blog }) {
  return (
    <div className='max-w-md bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
        <div className='p-6'>
            <h2 className='text-2xl font-bold text-gray-600 mb-2'>
                {blog.title}
            </h2>
            <p className='text-sm text-gray-400 mb-4'>
                By {blog.author} | { blog.createdAt } 
            </p>
            <p className='text-gray-500 mb-4'>
                {blog.description}
            </p>
            <button className='text-blue-500 font-semibold'>Read More</button>
        </div>
    </div>
  )
}
