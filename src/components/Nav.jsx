import { Link, NavLink } from "react-router-dom";

const nav = () => {
    return <div>
        <nav className="flex gap-20 justify-center py-1  text-white bg-white border-gray-200 dark:bg-gray-900 ">

            <NavLink style={(e) => { return { color: e.isActive ? "tomato" : "", fontWeight: e.isActive ? "bold" : "", fontSize: e.isActive ? "18px" : "" }; }} to="/">Home</NavLink>
            <NavLink style={(e) => { return { color: e.isActive ? "#f0ab8d" : "", fontWeight: e.isActive ? "bold" : "", fontSize: e.isActive ? "18px" : "" }; }} to="/user">User</NavLink>
            <NavLink style={(e) => { return { color: e.isActive ? "#f0ab8d" : "", fontWeight: e.isActive ? "bold" : "", fontSize: e.isActive ? "18px" : "" }; }} to="/about">About</NavLink>

        </nav></div>;
};

export default nav;
