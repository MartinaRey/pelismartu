import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="bg-zinc-700/80 backdrop-blur-sm">
          <ul className="flex gap-8 justify-center p-4 text-orange-300 font-semibold">
            <Link to="/">
              <li className="hover:text-white">Home</li>
            </Link>
            <Link to="/listado">
              <li className="hover:text-white">Films</li>
            </Link>
            <Link to="/favs">
              <li className="hover:text-white">Favs</li>
            </Link>
            <Link to="/perfil">
              <li className="hover:text-white">Perfil</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
