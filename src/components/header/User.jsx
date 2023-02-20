import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://th.bing.com/th/id/OIP.8qQzy1NxA2oUZKkyjplpzgHaH9?w=162&h=180&c=7&r=0&o=5&pid=1.7' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://th.bing.com/th/id/OIP.8qQzy1NxA2oUZKkyjplpzgHaH9?w=162&h=180&c=7&r=0&o=5&pid=1.7' alt='' />
                    </div>
                    <div className='text'>
                      <h4>raiqi</h4>
                      <label>Indonesia</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
