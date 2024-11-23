import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import UserDetail from "../components/UserDetail";
import NotFound from "../components/NotFound";
const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Child routes */}
                <Route path="/user" element={<User />} >

                    <Route path="/user/:name" element={<UserDetail />} />
                </Route>
                {/* <Route path="/user/:name" element={<UserDetail />} /> if we want this to open on new page normal one*/}
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
};

export default Routing;
