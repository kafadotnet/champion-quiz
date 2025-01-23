import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import GetStarted from './pages/GetStarted';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path='/home-page' element={<HomePage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
