import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const GoBackHandler = () => {
        navigate("/user");
        //or 
        //navigate(-1) //just one back navigation
    };

    return (


        <div className="bg-zinc-100 w-1/2 m-auto mt-10">
            <h1 className="text-5xl mb-2">User Detail</h1>
            <h1 className="text-3xl mt-2 mb-2 text-orange-400">Hey, {name}</h1>
            <p className="mb-2">Consequat deserunt sunt sint et qui nulla eu dolor aliqua ea irure.Consequat deserunt sunt sint et qui nulla eu dolor aliqua ea irure.</p>
            <button onClick={GoBackHandler} className=" p-3 bg-red-300 rounded-md">Go back</button>
        </div>

    );
};

export default UserDetail;
