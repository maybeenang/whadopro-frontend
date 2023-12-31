import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DetailPage from "./pages/dashboard/DetailPage";
import MemberPage from "./pages/dashboard/MemberPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import { AuthProvider, RequireAuth } from "react-auth-kit";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route
          element={
            <RequireAuth loginPath="/login">
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/detail/:id" element={<DetailPage />} />
          <Route path="/dashboard/members" element={<MemberPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </>
    )
  );

  return (
    <>
      <ToastContainer />
      <AuthProvider authType="localstorage" authName="_auth">
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;
