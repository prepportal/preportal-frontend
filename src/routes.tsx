import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import BranchPage from "./pages/BranchPage";
import SemesterPage from "./pages/SemesterPage";
import MenuPage from "./pages/MenuPage";
import SubjectPage from "./pages/SubjectPage";
import LoginPage from "./pages/LoginPage";
import QuestionPaperPage from "./pages/QuestionPaperPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BranchPage /> },
      { path: "/:brach_code", element: <SemesterPage />},
      { path: "/:brach_code/:sem_code/", element: <MenuPage />},
      { path: "/:brach_code/:sem_code/question", element: <SubjectPage />},
      { path: "/:brach_code/:sem_code/question/:sub_code", element: <QuestionPaperPage />},
      { path: "/login", element: <LoginPage />},
    ],
  },
]);

export default router;
