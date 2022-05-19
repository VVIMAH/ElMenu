import './LandingPage.css'
import LandingNav from './LandingNav'
import FoodCard from './FoodCard'
import { createDummyArray } from '../../oneliners'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const LandingPage = (props) => {
  const scrollElementIntoView = (e) => {
    e.preventDefault()
    document
      .querySelector(`${e.target.getAttribute('href').slice(1)}`)
      .scrollIntoView({ behavior: 'smooth' })
  }
  function swap(from, to, parent){
    // console.log("PARENT:",this)
    parent = arguments[2]
    let fromElement = parent.children[from-1]
    let toElement = parent.children[to-1]
    // console.dir(fromElement, toElement)
    from = {
      element: fromElement,
      top: fromElement.getBoundingClientRect().top,
      left: fromElement.getBoundingClientRect().left
    }
    to = {
      element: toElement,
      top: toElement.getBoundingClientRect().top,
      left: toElement.getBoundingClientRect().left
    }
    let topDifference = Math.abs(from.top-to.top)
    let leftDifference = Math.abs(from.left-to.left)
    
    fromElement.style.transform = `translate(${(from.left > to.left) ? -leftDifference : leftDifference}px, ${(from.top > to.top) ? -topDifference : topDifference}px)`
    toElement.style.transform = `translate(${(from.left < to.left) ? -leftDifference : leftDifference}px, ${(from.top < to.top) ? -topDifference : topDifference}px)`

    setTimeout(()=>{
      let swapper = fromElement.style.order
      fromElement.style.order = toElement.style.order
      toElement.style.order = swapper
      fromElement.style.transform = ""
      toElement.style.transform = ""
    }, 400)
    
  }

  useEffect(()=>{
    for(let foodCards of document.querySelectorAll('.FoodCards')){
      createDummyArray(foodCards.children.length).reverse().map(i=>{
        foodCards.children[i-1].style.order = i
        // console.log(foodCards.children[i-1])
        return true
      })
    }
  }, [])

  return (
    <div className="LandingPage">
      <LandingNav scrollElementIntoView={scrollElementIntoView} />
      <div className="main">
        <div className="Intro">
          <div className="TextContent">
            <div className="Trust">
              <i className="bx bxs-heart"></i>
              <span>people trust us</span>
            </div>
            <h1>
              We're&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                Serious
              </span>
              &nbsp; For&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                Food
              </span>
              &nbsp; &amp;&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                Delivery
              </span>
              .
            </h1>
            <span>
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 60 minutes.
            </span>
            <div className="SearchFood">
              <i className="bx bx-search-alt-2"></i>
              <input type="text" placeholder="Search food" />
              <i className="bx bx-search-alt-2 button"></i>
            </div>
            <Link
              to="#why"
              onClick={scrollElementIntoView}
              style={{
                width: '23px',
                height: '61px',
                backgroundImage: 'url(slider.png)',
                display: 'block',
              }}
              className="Slider"
            ></Link>
          </div>
          <img src="dashboardMain.png" alt="Fascinated" />
        </div>
        <div id="todayoffers">
          <h1>
            Today&nbsp;
            <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
              Special
            </span>
            &nbsp; Offers
          </h1>
          <p className="UnderH1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <div className="FoodCards">
            {createDummyArray(4).map((x) => (
              <FoodCard
                key={x}
                profile={'foodSample.png'}
                foodTitle={`Del Dish ${x}`}
                rating={4.4}
                raters={['profile.png', 'profile.png', 'profile.png']}
                text={
                  'Lorem Ipsum is simply dummy text of the printing and typsesetting industry'
                }
                price={'$10'}
              />
            ))}
          </div>
        </div>
        <div id="why">
          <div className="Left" style={{ backgroundImage: 'url(chefbg.png)' }}>
            <img src="cheffg.png" alt="" />
          </div>
          <div className="Right">
            <h1>
              We are&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                more
              </span>
              &nbsp; than&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                multiple
              </span>
              &nbsp; services
            </h1>
            <p>
              This is a type of resturent which typically serves food and drink,
              in addition to light refreshments such as baked goods or snacks.
              The term comes frome the rench word meaning food
            </p>
            <div className="Services">
              {[
                'image 15.png',
                'image 17.png',
                'image 18.png',
                'image 15.png',
                'image 17.png',
                'image 18.png',
              ].map((x) => {
                return (
                  <div className="Service">
                    <img src={x} alt="" />
                    <span>Online Order</span>
                  </div>
                )
              })}
            </div>
            <button>About Us</button>
          </div>
        </div>
        <div id="menu">
          <h1>
            <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
              Menus
            </span>
            &nbsp; That&nbsp;
            <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
              Always
            </span>
            &nbsp; Make You Fall In&nbsp;
            <span style={{ color: 'var(--orange)', opacity: '0.7' }}>Love</span>
            &nbsp;
          </h1>
          <p className="UnderH1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="Categories">
            <button className="Category" onClick={()=>{swap(2, 3, document.querySelectorAll('.FoodCards')[1])}}>Ramen</button>
            <button className="Category">Breakfast</button>
            <button className="Category">Lunch</button>
            <button className="Category">Dinner</button>
            <button className="Category active">Mexican</button>
            <button className="Category">Italian</button>
            <button className="Category">Desserts</button>
            <button className="Category">Drinks</button>
          </div>
          <div className="FoodCards">
            {createDummyArray(8).map((x) => (
              <FoodCard
                key={x}
                profile={'foodSample.png'}
                foodTitle={`Del Dish ${x}`}
                rating={4.4}
                raters={['profile.png', 'profile.png', 'profile.png']}
                text={
                  'Lorem Ipsum is simply dummy text of the printing and typsesetting industry'
                }
                price={'$10'}
              />
            ))}
          </div>
        </div>
        <div id="download">
          <div className="Left" style={{ backgroundImage: 'url(chef2bg.png)' }}>
            <img src="chef2fg.png" alt="" />
          </div>
          <div className="Right">
            <h1>
              It's Now&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                Easier
              </span>
              &nbsp; to&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                Order
              </span>
              &nbsp; by Our Mobile&nbsp;
              <span style={{ color: 'var(--orange)', opacity: '0.7' }}>
                App
              </span>
              &nbsp;
            </h1>
            <p>
              All you need to do is downlode one of the best delivery apps, make
              a and most companies are opting for mobile app devlopment for food
              delivery
            </p>

            <div className='DownloadButtons'>
                <img src="downloadFromGooglePlay.png" alt="" />
                <img src="downloadFromAppStore.png" alt="" />
            </div>
            
          </div>
        </div>
        <div id='footer'>
            <div className='fmain'>
                <img src="logo_whitebg.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className='SocialIcons'>
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-instagram' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
            <div className='fGroup'>
                <h3>About Us</h3>
                <Link to="#">About Us</Link>
                <Link to="#">Contact</Link>
                <Link to="#">Company</Link>
            </div>
            <div className='fGroup'>
                <h3>Company</h3>
                <Link to="#">Partnership</Link>
                <Link to="#">Terms of Use</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Sitemap</Link>
            </div>
            <div className='fGroup'>
                <h3>Get in touch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div>
                    <input type="text" placeholder='Email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
