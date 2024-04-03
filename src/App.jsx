import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import VideoPage from "./Components/VideoPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home/></div>,
    },
    {
      path: "/room/:id",
      element: <div><VideoPage/></div>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
