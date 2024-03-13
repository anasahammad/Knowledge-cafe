
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleBookmarks}) => {
   const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='my-4'>
            <img className='w-full mb-4' src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between items-center">

                <div className='flex gap-6'>
                    <img className="w-[60px]" src={author_img} alt="" />

                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex'>
                    <p><span>{reading_time}</span> min read</p>
                    <button onClick={()=> handleBookmarks(blog)} className='ml-2 text-2xl'><CiBookmark></CiBookmark></button>
                    
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p className='flex gap-4'>
            {
                hashtags.map((hash, idx)=> <span key={idx}> <a href="">#{hash} </a></span>)
            }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
    
}
export default Blog;