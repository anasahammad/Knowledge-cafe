
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'


function App() {
  
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadinTime] = useState(0);

const handleBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
}

const handleReadingTime = (time, id) =>{
  const newReadTime = readingTime + time;
  setReadinTime(newReadTime)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks)
}
  return (
    <>
      <div className='container mx-auto'>
      <Header></Header>
     <div className='md: flex gap-6'>
     <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
     </div>
      </div>
  
    
    </>
  )
}


export default App
