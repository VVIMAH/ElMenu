import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing/LandingPage';
import Feed from './components/feed/Feed';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingPage />} ></Route>
          <Route path='/menu' element = {<Feed />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
