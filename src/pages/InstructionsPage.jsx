import { NavLink } from "react-router-dom";

const InstructionsPage = () => {
  return (
    <section className="w-screen h-screen bg-gray-700 font-Montserrat text-white">
      <nav className="flex justify-between px-8 py-8">
        <div>
          <h1>
            <NavLink to="/" className="p-5 text-3xl font-semibold text-white">
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
      <main className="ml-7 p-5 text-center">
        <div className="About-quiz text-white">
          <h3 className="pt-10 text-center font-Montserrat text-xl font-semibold text-white">
            About the general knowledge quiz
          </h3>
          <p className="pt-4 text-white">
            You can test your General knowledge skills with Champions Quiz.
          </p>
        </div>
        <div className="About-quiz text-white">
          <h3 className="pt-6 text-center font-Montserrat text-xl font-semibold text-white">
            The quiz
          </h3>
          <p className="pt-4 text-white">
            The quiz contains 10 questions and these are time bound through
            timer (10 sec. Max).
          </p>
        </div>
        <div className="About-quiz text-white">
          <h3 className="pt-6 text-center font-Montserrat text-xl font-semibold text-white">
            Count Your Score
          </h3>
          <p className="pt-4 text-white">
            You will get 1 point for each correct answer. At the end of the
            Quiz, your total score will be displayed. Maximum score is 10
            points.
          </p>
        </div>
        <div className="flex items-center justify-center pt-20">
          <NavLink
            to="/home-page"
            className="btn transition duration-500 ease-out"
          >
            Start Playing <i className="fa-solid fa-play"></i>
          </NavLink>
        </div>
      </main>
    </section>
  );
};

export default InstructionsPage;
