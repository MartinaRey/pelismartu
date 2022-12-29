import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Listado = () => {
  const [data, setData] = useState([]);

  const peli = async () => {
    const respuesta = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=b53d5673ee3ec47f7f63e8252d9d0924&language=es-ES"
    );
    setData(respuesta.data.results);
  };

  useEffect(() => {
    peli();
  }, []);
  const formatoFecha = (fecha) => {
    let today = new Date(fecha);
    let options = { day: "numeric", month: "short", year: "numeric" };

    return today.toLocaleDateString("es-ES", options);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {data.map((peli) => (
        <div className="flex bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative group">
          <img
            className="w-full rounded-t-lg group-hover:blur-sm h-full"
            src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
            alt={peli.original_title}
          />

          <div className="rounded-lg overflow-hidden px-5 absolute flex flex-col justify-between bg-black/60 bottom-0 w-full h-[0%] group-hover:h-full opacity-100 group-hover:opacity-100 transition duration-150 ease-out hover:ease-in ">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-11">
                {peli.original_title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {peli.overview.length > 120
                  ? `${peli.overview.substring(0, 120)}...`
                  : peli.overview}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {formatoFecha(peli.release_date)}
              </p>
            </div>
            <div className="mb-5 flex justify-end">
              <Link
                to={`/detalle/${peli.id}`}
                className="bg-slate-700 font-medium rounded text-yellow-50 px-2 py-1 mt-7 hover:bg-slate-600"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
