import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;