// import './components/ Restinfo/restinfo.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Restinfo from "./components/Restinfo/restinfo";
import Restype from "./components/Restype/restype";
import Resmenu from "./components/Resmenu/resmenu";
import Them from "./components/same/them";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>The Home Page</>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/restinfo" element={<Restinfo />}></Route>
          <Route path="/restype" element={<Restype />}></Route>
          <Route path="/resmenu" element={<Resmenu />}></Route>
          <Route path="/RestaurantProfile" element={<Them />}></Route>
          <Route path="*" element={<>Unknown Page</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
