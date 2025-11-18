
import { SignUpButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center'>
      
      <h1 className='text-3xl font-bold '>Home Page</h1>
      <SignedOut>
        <div className='mb-4 border-2 p-2 rounded '>
          <SignUpButton mode="modal">Sign Up</SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className='mb-4 border-2 p-2 rounded '>
          <SignOutButton>Log Out</SignOutButton>
        </div>
      </SignedIn>
    </main>
  )
}

export default page