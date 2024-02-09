import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllLists from "../pages/AllLists";
import CompletedList from "../pages/CompletedList";
import IncompleteList from "../pages/IncompleteList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllLists />,
      },
      {
        path: "/completed",
        element: <CompletedList />,
      },
      {
        path: "/incomplete",
        element: <IncompleteList />,
      },
    ],
  },
]);

export default router;
