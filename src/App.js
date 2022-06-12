import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Order from './components/order/order'
import Signup from './components/signup/signup'
import RestaurantProfile from './components/RestaurantProfile/same/them'
import LandingPage from './components/landing/LandingPage'
import Menu from './components/menu/Menu'
import ClientSignup from './components/clientSignup/signupclient'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/restaurantprofile" element={<RestaurantProfile />}></Route>
          <Route path="/clientsignup" element={<ClientSignup />}></Route>
          <Route path="/menu" element={<Menu />}> </Route>
          <Route path="*" element={<>Unknown Page</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
