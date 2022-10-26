import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import Checkout from "../components/Checkout/Checkout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/category/:id',
                element: <CategoryDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])