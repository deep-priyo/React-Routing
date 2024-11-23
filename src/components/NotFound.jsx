import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const d = useNavigate()
    const goHome = () => {
        d("/")
    };
    return (

        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={goHome} className=" p-3 bg-red-300 rounded-md">Go back</button>
        </div>
    );
};
export default NotFound;
