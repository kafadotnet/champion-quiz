import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <section
      id="navigation"
      className="h-screen w-screen bg-gray-700 font-Montserrat text-white"
    >
      <div className="text-white">
        <nav className="flex justify-between px-8 py-8">
          <div>
            <h1>
              <NavLink to="/" className="p-5 text-3xl font-semibold text white">
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

        <main className="px-16 py-16">
          <header className="mt-12 pb-8 text-center">
            <h3 className="text-3xl font-semibold">Quiz For Champions</h3>
            <p className="pt-4 text-base text-white">
              Click Get Started to test your General Knowledge arsenal!
            </p>
          </header>

          <NavLink to="/home-page">
            <div className="flex items-center justify-center pt-20">
              <div className="btn btn:hover relative h-40 w-40 rounded-full bg-green-500 transition duration-500 ease-out"></div>
              <div className="btn-start absolute h-10 w-60 bg-gray-100 p-2 opacity-75">
                <h4 className="btn-start-font text-center">Get Started</h4>
              </div>
            </div>
          </NavLink>
        </main>
      </div>
    </section>
  );
};

export default GetStarted;
