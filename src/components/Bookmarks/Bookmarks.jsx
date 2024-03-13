import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        <>
        <div className="md: w-1/3">
        <div className="text-center">
            <h2 className="text-2xl">Reading Time: {readingTime} min </h2>
        </div>
        <div className=" bg-slate-200 p-4 mx-auto ">
            <h1 className="text-3xl text-center">Bookmarked Blog: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
       
        
        </>
    );
};

export default Bookmarks;