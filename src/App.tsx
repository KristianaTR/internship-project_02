import "./App.css";
import { useAppSelector } from "./App/hooks";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import YourMovies from "./Pages/YourMovies/YourMovies";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.users.activeUser);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/your-movies" element={<YourMovies />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
