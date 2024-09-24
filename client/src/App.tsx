import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontendLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "user",
          element: <UserPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
