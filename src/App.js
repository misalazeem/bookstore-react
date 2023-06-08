import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
