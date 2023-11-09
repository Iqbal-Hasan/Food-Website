import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import FoodDetails from "../Pages/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import Order from "../Pages/Order";
import UserFoodItems from "../Pages/UserFoodItems";
import AddFoodItem from "../Pages/AddFoodItem";
import UserOrder from "../Pages/UserOrder";
import PageNotFound from "../Pages/PageNotFound";
import Npm from "../Components/Npm";
import Mongodb from "../Pages/Mongodb";
import DataBinding from "../Pages/DataBinding";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allfooditems",
        element: <AllFoodItems></AllFoodItems>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "details/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(
            `https://slice-restaurant-server.vercel.app/allFoodData/${params.id}`
          ),
      },
      {
        path: "order/:id",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://slice-restaurant-server.vercel.app/allFoodData/${params.id}`
          ),
      },
      {
        path: "userFoodItems",
        element: (
          <PrivateRoute>
            <UserFoodItems></UserFoodItems>
          </PrivateRoute>
        ),
      },
      {
        path: "addFoodItem",
        element: (
          <PrivateRoute>
            <AddFoodItem></AddFoodItem>
          </PrivateRoute>
        ),
      },
      {
        path: "myOrder",
        element: (
          <PrivateRoute>
            <UserOrder></UserOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "npm",
        element: <Npm></Npm>,
      },
      {
        path: "mongodb",
        element: <Mongodb></Mongodb>,
      },
      {
        path: "dataBinding",
        element: <DataBinding></DataBinding>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default MyRouter;
