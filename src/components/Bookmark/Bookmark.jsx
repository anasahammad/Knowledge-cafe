
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-500 mb-4 p-4">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;