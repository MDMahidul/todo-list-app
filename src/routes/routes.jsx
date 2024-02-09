import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllLists from "../pages/AllLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllLists />,
      },
    ],
  },
]);

export default router;
