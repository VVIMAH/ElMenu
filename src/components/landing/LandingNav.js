import { Link } from "react-router-dom"

const LandingNav = (props)=>{
    const scrollElementIntoView = props.scrollElementIntoView
    const clickedMenu = (e)=>{
        document.querySelector('.MenuButton').classList.toggle('ClickedMenu')
        document.querySelector('.LandingNav .RightSide').classList.toggle('showMenu')
    }
    return (
        <div className="LandingNav">
            <Link to="/"><img src="logo_whitebg.png" alt="logo"/></Link>
            <div className="RightSide">
                <Link to="#todayoffers" onClick={scrollElementIntoView}>Today Special Offers</Link>
                <Link to="#why" onClick={scrollElementIntoView}>Why ElMenu?</Link>
                <Link to="#menu" onClick={scrollElementIntoView}>Our Menu</Link>
                {/* <Link to="#popularfood" onClick={scrollElementIntoView}>Our Popular Food</Link> */}
                <Link to="#download" onClick={scrollElementIntoView} className="DownloadAppButton">Download App</Link>
            </div>
                <i className='bx bx-menu MenuButton' onClick={clickedMenu}></i>
        </div>
    )
}

export default LandingNav