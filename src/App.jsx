import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Menu from "./Pages/components/Menu";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div className="w-32">
          <Menu />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
