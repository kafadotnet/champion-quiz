import { NavLink } from "react-router-dom";
import Quiz from "../components/Quiz";

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
                className="sm:text-md p-2 text-xl font-semibold text-white"
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

        <main className="quiz-main px-10 py-10">
          <header className="mt-2 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              Quiz for Champions
            </h3>
          </header>
          <Quiz />
        </main>
      </section>
    </>
  );
};

export default HomePage;
