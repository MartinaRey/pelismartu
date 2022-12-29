export const Footer = () => {
  return (
    <>
      <footer className="bg-slate-500  text-zinc-700 p-4 text-center">
        <nav>
          <ul className="flex gap-8 justify-center text-yellow-200">
            <li>
              <a
                href="https://www.facebook.com/mar.martina/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SraAckerman_"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Twitter
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright Martu Rey</p>
      </footer>
    </>
  );
};
