import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
const App = () => {
  return (
    <>
      <div className="">
        <nav className="flex gap-20 justify-center py-1  text-white bg-white border-gray-200 dark:bg-gray-900 ">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
