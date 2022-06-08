import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Order from './components/order/order'
import Signup from './components/signup/signup'
import RestaurantProfile from './components/RestaurantProfile/same/them'
// import './App.css'
import LandingPage from './components/landing/LandingPage'
import Feed from './components/feed/Feed'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path='/feed' element={<Feed />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/restaurantprofile" element={<RestaurantProfile />}></Route>
          <Route path="*" element={<>Unknown Page</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
