import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Details from './pages/song details';

function App() {
  return (
    <>
      <div className='min-h-screen p-6 bg-white text-grey-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route
            path='/'
            element={
              <Home/>
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites />
            }
          />
          <Route
            path='/song-item/:id'
            element={<Details />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
