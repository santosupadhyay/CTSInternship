import React from 'react'

export default function ProfileAvatar({name}) {
    const initial = name?.charAt(0).toUpperCase() || "?";
  return (
    <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold'>
        {initial}
    </div>
  )
}
