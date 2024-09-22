import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FrontendLayout from "./layouts/FrontendLayout"
import Home from "./pages/Home"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontendLayout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <div>About</div>,
        },

      ],
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App  
