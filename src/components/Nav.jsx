import { Link } from "react-router-dom";

const nav = () => {
    return <div>
        <nav className="flex gap-20 justify-center py-1  text-white bg-white border-gray-200 dark:bg-gray-900 ">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
        </nav></div>;
};

export default nav;
