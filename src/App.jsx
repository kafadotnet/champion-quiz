import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructionsPage from "./pages/InstructionsPage";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/instructions-page" element={<InstructionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
