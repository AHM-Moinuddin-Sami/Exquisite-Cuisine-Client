import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Register/Register";
import ChefPage from "../Pages/Homepage/ChefPage/ChefPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>,
                loader: () => fetch('https://exquisite-cuisine-server-ahm-moinuddin-sami.vercel.app/chefs')
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
                path: '/chefs/:id',
                element: <PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://exquisite-cuisine-server-ahm-moinuddin-sami.vercel.app/chefs/${params.id}`)
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

export default router;