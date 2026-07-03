import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Complejos from "./pages/Complejos.jsx";
import Reservas from "./pages/Reservas.jsx";
import Perfil from "./pages/Perfil.jsx";
import Admin from "./pages/Admin.jsx";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/registro" element={<Register />} />

      <Route path="/complejos" element={<Complejos />} />

      <Route
        path="/reservas"
        element={
          <ProtectedRoute>
            <Reservas />
          </ProtectedRoute>
        }
      />

      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly={true}>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;