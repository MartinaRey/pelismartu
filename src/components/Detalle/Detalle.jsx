import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detalle.css";

export const Detalle = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const detallePeli = async () => {
    const respuesta = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b53d5673ee3ec47f7f63e8252d9d0924&language=es-ES`
    );
    setData(respuesta.data);
  };

  console.log(data);

  useEffect(() => {
    detallePeli();
  }, [id]);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl my-10 ">🎞 Detalle pelis 🎞</h1>
      <div className="bg-slate-700 flex flex-col xl:flex-row rounded-lg items-center relative">
        <div className="rounded-md">
          <img
            className="w-full h-full xl:max-h-[550px] rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_title}
          />
        </div>
        <div className="flex flex-col p-14 gap-8 absolute rounded-lg overflow-y-scroll scrollbar bg-black/80 h-full xl:bg-transparent xl:relative">
          <h1 className="text-4xl font-bold text-gray-300">
            {data.original_title}
          </h1>
          <div className="flex gap-6">
            {data.genres?.map((genre) => (
              <h3 className="text-lg bg-orange-200 rounded-xl px-4">
                {genre.name}
              </h3>
            ))}
          </div>
          <p className="max-w-2xl md:max-w-3xl text-xl text-orange-100">
            {data.overview}
          </p>
          <span className=" text-orange-100">
            🍅{data.vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
      <Link
        to="/listado"
        className="bg-slate-700 font-bold rounded text-yellow-50 px-2 py-1 my-7 hover:bg-slate-600"
      >
        {" "}
        Volver al Listado{" "}
      </Link>
    </div>
  );
};
