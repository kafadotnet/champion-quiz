import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section
        id="navigation"
        className="h-screen w-screen bg-gray-700 font-Montserrat text-white"
      >
        <nav className="flex justify-between px-8 py-8">
          <div>
            <h1>
              <NavLink
                to="/"
                className="sm:text-md p-4 text-3xl font-semibold text-white"
              >
                Champion Quiz
              </NavLink>
            </h1>
          </div>
          <ul className="flex">
            <li>
              <NavLink
                to="/instructions-page"
                className="btn btn:hover p-5 text-lg font-semibold transition duration-500 ease-out"
              >
                Instructions
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="px-10 py-10">
          <header className="mt-2 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">...</h3>
          </header>

          <div className="flex items-center justify-center p-2">
            <div className="answer-correct flex h-[300px] w-[800px] flex-col justify-center rounded-md text-center shadow-xl">
              <h1 className="mb-2 text-2xl font-semibold text-white">...</h1>
              <button className="text-md btn-submit btn:hover mt-20 px-2 py-2 text-white">
                Next Question <i className="fa-solid fa-forward"></i>
              </button>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center p-2">
            <div className="flex h-[100px] w-[800px] flex-col justify-center rounded-md bg-gray-400 text-center shadow-xl"></div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HomePage;
