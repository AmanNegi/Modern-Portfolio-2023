import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Experience from "./pages/experience/index.tsx";
import Portfolio from "./pages/portfolio/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main>
    <RouterProvider router={router} />
  </main>
);
