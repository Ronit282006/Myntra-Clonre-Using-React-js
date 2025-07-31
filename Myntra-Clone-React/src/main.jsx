import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routs/bag.jsx";
import Home from "./routs/Home.jsx";
import myntraStore from "./store/index.js";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        /*loader: () => fetch("https://fakestoreapi.com/products")*/
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
