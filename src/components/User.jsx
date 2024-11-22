import { Link } from "react-router-dom";
const User = () => {
  return <div>
    <div className="bg-zinc-100 w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-2">User</h1>
      <div className="flex w-1/2 flex-col mt-5">
        <Link to="/user/john" className="p-3 bg-red-200 text-2xl mb-2 hover:bg-red-400">John</Link>
        <Link to="/user/jane" className="p-3 bg-red-200 text-2xl mb-2 hover:bg-red-400">Jane</Link>
        <Link to="/user/jim" className="p-3 bg-red-200 text-2xl mb-2 hover:bg-red-400">Jim</Link>
      </div>
    </div>

  </div>;
};

export default User;
