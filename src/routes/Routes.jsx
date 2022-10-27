import { createBrowserRouter } from "react-router-dom";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import Checkout from "../components/Checkout/Checkout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('https://course-zone-server-nine.vercel.app/categories')
            },
            {
                path: '/category/:id',
                element: <CategoryDetails />,
                loader: ({params}) => fetch(`https://course-zone-server-nine.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://course-zone-server-nine.vercel.app/category/${params.id}`),
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