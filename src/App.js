import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Order from './components/order/order'
import Signup from './components/signup/signup'
import RestaurantProfile from './components/RestaurantProfile/same/them'
import LandingPage from './components/landing/LandingPage'
import Menu from './components/menu/Menu'
// import Overview from './components/overview/overview'
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
          <Route path="/menu" element={<Menu />}> </Route>
          <Route path="*" element={<>Unknown Page</>}></Route>
          {/* <Route path="/overview" element={<Overview/>}></Route>
          <Route path ="/dashboard"element={<Dashboard/>}></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
