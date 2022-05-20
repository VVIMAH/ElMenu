
import './restinfo.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup';
import Restinfo from './components/restinfo';
import Restype from './components/restype';
import Resmenu from './components/resmenu';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
   <Route path='/signup'element={<Signup/>}></Route>
     <Route path='/restinfo'element={<Restinfo/>}></Route>
    <Route path='/restype' element={<Restype/>}></Route>
    <Route path='/resmenu' element={<Resmenu/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
