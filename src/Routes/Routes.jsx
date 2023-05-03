import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Homepage></Homepage>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    }
]);

export default router;