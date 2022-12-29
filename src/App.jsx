// Librerias
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

// Componentes
import { Login } from "./components/Login/Login";
import { Listado } from "./components/Listado/Listado";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Perfil } from "./components/Perfil/Perfil";
import { Favs } from "./components/Favs/Favs";
import { Detalle } from "./components/Detalle/Detalle";

// Styles
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("martu");
    if (getToken) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {token && <Header />}
      <div
        className={`bg-neutral-500 relative ${
          token ? "min-h-[calc(100vh-136px)]" : "min-h-[calc(100vh-80px)]"
        }`}
      >
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/listado" element={<Listado />} />
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil setToken={setToken} />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
