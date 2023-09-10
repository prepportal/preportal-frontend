import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import BranchPage from "./pages/BranchPage";
import SemesterPage from "./pages/SemesterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BranchPage /> },
      { path: "/:code", element: <SemesterPage /> },
    ],
  },
]);

export default router;
