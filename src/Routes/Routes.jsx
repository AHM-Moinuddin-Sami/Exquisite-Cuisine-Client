import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Register/Register";
import ChefPage from "../Pages/Homepage/ChefPage/ChefPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('http://localhost:5000/chefs')
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
            },
            {
                path:':id',
                element: <PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
                loader: (params) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
]);

export default router;