import { useContext, useEffect, useState } from 'react'

import Blogs from './components/Blogs'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import { AppContext } from './Context/AppContext'


function App() {
  const{fetchBlogPost}=useContext(AppContext)
  useEffect(()=>{
    fetchBlogPost();
  },[])

  return (
    <div className='w-full h-full '>
      <Navbar/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
