import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import YourMovies from './Pages/YourMovies/YourMovies';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <div className="app-container">
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/profile" element= {<Profile />} />
          <Route path="/your-movies" element= {<YourMovies />} />
        </Routes>
     </div>
    </>
  );
}

export default App;
