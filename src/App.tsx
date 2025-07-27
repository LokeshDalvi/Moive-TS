import Home from "./pages/Home.tsx";
import Favorite from "./pages/Favorite.tsx";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/NavBar.tsx";
import { MovieProvider } from "./contexts/MovieContext.tsx";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
