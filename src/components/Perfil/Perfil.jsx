import { useNavigate } from "react-router-dom";
import Apu from "../../assets/images/apu-vuelva-prontos.gif";

export const Perfil = ({ setToken }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("martu");
    setToken(false);
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-136px)]">
      <h1 className="text-white font-bold text-2xl">Queres salir maquinola?</h1>
      <img src={Apu} alt="Chau" />
      <button
        className="bg-slate-700 font-medium rounded text-yellow-50 px-2 py-1 mt-7 hover:bg-slate-600"
        onClick={logout}
      >
        LogOut
      </button>
    </div>
  );
};
