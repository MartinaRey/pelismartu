import { Outlet, Navigate } from "react-router-dom";
export const PrivateRoute = () => {
  let token = localStorage.getItem("martu");
  return token?.length > 1 ? <Outlet /> : <Navigate to="/login" />;
};
