import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 m-4 border-b-2">
            <h1 className="text-4xl">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
           
        </div>
    );
};

export default Header;