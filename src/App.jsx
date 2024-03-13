
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'


function App() {
  
const [bookmarks, setBookmarks] = useState([]);

const handleBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
}
  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
     <div className='md: flex gap-6'>
     <Blogs handleBookmarks={handleBookmarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      </div>
  
    
    </>
  )
}


export default App
