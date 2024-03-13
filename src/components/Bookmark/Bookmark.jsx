
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-gray-300 mb-4 p-4 rounded-lg">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;