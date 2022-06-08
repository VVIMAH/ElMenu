import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Order from './components/order'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/'element={<Order />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
