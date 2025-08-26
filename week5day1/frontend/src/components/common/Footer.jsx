import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-300 p-4 mt-8'>
      <div className='container mx-auto text-center text-sm'>
        <p> © {new Date().getFullYear()} Blog Time. All right reserved </p>
      </div>
    </footer>
  )
}
