import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/getUser/Users";
import AddUser from "./components/addUser/AddUser";
import UpdateUser from "./components/updateUser/UpdateUser";
import viewUser from "./components/viewUser/viewUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/edit/:id",
      element: <UpdateUser />,
    },
    {
      path: "/view",
      element: <viewUser />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}>
        <h1 className="text-red-500">Hello</h1>
      </RouterProvider>
    </div>
  );
}

export default App;
