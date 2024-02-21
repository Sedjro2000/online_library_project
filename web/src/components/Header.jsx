import React from 'react'
import SearchBar from './SearchBar'
import { Star } from 'lucide-react';
import { Home } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { UserRound } from 'lucide-react';
import Link from 'next/link'

const Header = () => {
  return (
    <div className='mx-auto flex max-w-6xl justify-center'>
      
      <nav className='flex justify-center space-x-4 font-Sora capitalize font-semibold '>
        
        <Link href="/" className='flex p-4' >
          <Home />
          Home
        </Link>
         <Link href="/books" className='flex p-4' >
          <BookOpen/>
          Books
        </Link>
        <Link href="/playlist"  className='flex p-4'>
          <Star />
          Playlist
        </Link>
        <SearchBar />
       
        <Link href="/" className='flex p-4'>
          
          User
        <UserRound />
        </Link>

        


      </nav>
        

    </div>
  )
}

export default Header