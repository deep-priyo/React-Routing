import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import UserDetail from "../components/UserDetail";
const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Child routes */}
                <Route path="/user" element={<User />} >
                    <Route path="/user/:name" element={<UserDetail />} />
                </Route>
                <Route path="/about" element={<About />} />

            </Routes>
        </div>
    );
};

export default Routing;
