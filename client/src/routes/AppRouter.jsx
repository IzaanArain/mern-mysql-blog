import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PostView from "../pages/post/PostView";
import CreatePost from "../pages/post/CreatePost";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <PostView />,
      },
      {
        path: "/add",
        element: <CreatePost />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
