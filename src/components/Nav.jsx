import { NavLink } from "react-router-dom";

const nav = () => {
    return <div>
        <nav className="flex gap-20 justify-center py-1  text-white bg-white border-gray-200 dark:bg-gray-900 ">

            <NavLink className={(e) => {
                return [e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : ""].join(" ")
            }} to="/">Home</NavLink>

            <NavLink to="/user">
                {(e) => {
                    return (
                        <span
                            className={[
                                e.isActive ? "text-red-800" : "",
                                e.isActive ? "font-bold" : ""].join(" ")}
                        >User

                        </span>
                    );
                }}
            </NavLink>
            <NavLink style={(e) => { return { color: e.isActive ? "#f0ab8d" : "", fontWeight: e.isActive ? "bold" : "" }; }} to="/about">About</NavLink>

        </nav></div >;
};

export default nav;
