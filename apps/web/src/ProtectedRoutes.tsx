import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./AppHeader";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import type{ ReactNode } from "react";
import Favourites from "./pages/FavouriteEvents";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoutes: React.FC = () => {
  return (
    <ProtectedRoute>
      <Header />
      <Routes>
        <Route path="/events" element={<Home />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* Redirect any unknown path to /home */}
        <Route path="*" element={<Navigate to="/events" replace />} />
      </Routes>
    </ProtectedRoute>
  );
};

export default ProtectedRoutes;


export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

