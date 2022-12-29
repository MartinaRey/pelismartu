import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

export const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = event.target.email.value;
    console.log(regexEmail.test(email));
    const password = event.target.password.value;

    if (email === "martu" && password === "1234") {
      localStorage.setItem("martu", "aqiuehqiwuehqiwuehaksjdba21312kjaqbnsd");
      toast("🐧 Todo piola, pasa tranquilo");
      setToken(true);
      navigate("/listado");
      return;
    }

    if (email === "franco" && password === "1234") {
      localStorage.setItem("martu", "aqiuehqiwuehqiwuehaksjdba21312kjaqbnsd");
      toast("ingresaste correctamente");
      setToken(true);
      navigate("/listado");
      return;
    }

    if (email === "" && password === "") {
      toast("campos vacios");
      return;
    }
    if (email === "") {
      toast("campo email vacio");
      return;
    }
    if (password === "") {
      toast("campo password vacio");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      toast("email no valido");

      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      toast("email o contraseña incorrecta");
      return;
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((respuesta) => {
        toast("todo piola");
        console.log(respuesta.data.token);
        const token = respuesta.data.token;
        localStorage.setItem("martu", token);
        setToken(true);
        navigate("/listado");
      });
  };

  return (
    <div className="h-full absolute w-full bg-slate-400 flex flex-col justify-center items-center py-8 px-5">
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler} className="form-estilos">
        <label htmlFor="email">
          <span>Correo electronico:</span>
          <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          <span>Contraseña</span>
          <input type="password" name="password" />
        </label>
        <div className="w-full flex justify-center">
          <button
            className="bg-zinc-700 text-amber-100 py-1 mt-5 rounded-xl px-6"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
