import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from './pages/Home';

const Router = (): JSX.Element => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default Router;
