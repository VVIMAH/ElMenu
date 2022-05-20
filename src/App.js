
// import './components/ Restinfo/restinfo.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup/signup';
import Restinfo from './components/Restinfo/restinfo';
import Restype from './components/Restype/restype';
import Resmenu from './components/Resmenu/resmenu';

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
