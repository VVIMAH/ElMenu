import "./LandingPage.css"
import LandingNav from "./LandingNav"
import FoodCard from "./FoodCard"

const LandingPage = (props)=>{
    return (
        <div className="LandingPage">
            <LandingNav />
            <div className="main">
                <div className="Intro">
                    <div className="TextContent">
                        <div className="Trust">
                            <i className='bx bxs-heart'></i>
                            <span>people trust us</span>
                        </div>
                        <h1>
                            We're&nbsp; 
                            <span style={{color: "var(--orange)", opacity: "0.7"}}>Serious</span>&nbsp;
                            For&nbsp;
                            <span style={{color: "var(--orange)", opacity: "0.7"}}>Food</span>&nbsp;
                            &amp;&nbsp;
                            <span style={{color: "var(--orange)", opacity: "0.7"}}>Delivery</span>.
                        </h1>
                        <span>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</span>
                        <div className="SearchFood">
                            <i className='bx bx-search-alt-2' ></i>
                            <input type="text" placeholder="Search food" />
                            <i className='bx bx-search-alt-2 button' ></i>
                        </div>
                    </div>
                    <img src="dashboardMain.png" alt="Fascinated" />
                </div>
                <div id="todayoffers">
                    <h1>
                        Today&nbsp;
                        <span style={{color: "var(--orange)", opacity: "0.7"}}>Special</span>&nbsp;
                        Offers
                    </h1>
                    <p className="UnderH1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                    <div className="FoodCards">
                        {[1, 2, 3, 4].map(x => <FoodCard key={x} profile={"foodSample.png"} foodTitle={"Del Dish"} rating={4.4} raters={["profile.png", "profile.png", "profile.png"] } text={"Lorem Ipsum is simply dummy text of the printing and typsesetting industry"} price={'$10'}/>)}
                        
                    </div>
                </div>
                <div id="why">
                    <div className="Left" style={{background: "url(chefbg.png)"}}>
                        <img src="cheffg.png" alt="" />
                    </div>
                    <div className="Right">
                        <h1>
                            We are&nbsp;
                            <span style={{color: "var(--orange)", opacity: "0.7"}}>more</span>&nbsp; 
                            than&nbsp;
                            <span style={{color: "var(--orange)", opacity: "0.7"}}>multiple</span>&nbsp; 
                            services
                        </h1>
                        <p>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage