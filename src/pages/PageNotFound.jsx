import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section
      id="navigation"
      className="h-screen w-screen bg-gray-700 font-Montserrat text-white"
    >
      <nav className="flex justify-between px-8 py-8">
          <div>
            <h1>
              <NavLink to="/" className="p-5 text-2xl font-semibold text white">
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
      
        <h1 className="text-3xl text-red-400 text-center mt-6">404 - Page Not Found!</h1>

    </section>
  )
}

export default PageNotFound;