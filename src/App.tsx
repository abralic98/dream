import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import DashboardPage from "./pages/app/dashboard/DashboardPage";
import ProfilePage from "./pages/app/profile/ProfilePage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import { UnknownRoute } from "./pages/UnknownRoute";
import GamePage from "./pages/app/dashboard/game/[id]/GamePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="*" element={<UnknownRoute />} />

      <Route path="/app/*" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="game/:gameId" element={<GamePage />} />
        <Route path="*" element={<UnknownRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
