import { Link } from "react-router-dom"

const LandingNav = (props)=>{
    const scrollElementIntoView = (e)=>{
        e.preventDefault()
        document.querySelector(`${e.target.getAttribute('href').slice(1)}`).scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className="LandingNav">
            <Link to="/"><img src="logo_whitebg.png" alt="logo"/></Link>
            <div className="RightSide">
                <Link to="#todayoffers" onClick={scrollElementIntoView}>Today Special Offers</Link>
                <Link to="#why" onClick={scrollElementIntoView}>Why ElMenu?</Link>
                <Link to="#menu" onClick={scrollElementIntoView}>Our Menu</Link>
                <Link to="#popularfood" onClick={scrollElementIntoView}>Our Popular Food</Link>
                <Link to="#download" onClick={scrollElementIntoView} className="DownloadAppButton">Download App</Link>
            </div>
        </div>
    )
}

export default LandingNav