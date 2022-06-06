import "../navbar_vanessa/NavBar.css"
const NavBarVans = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={"logo_whitebg.png"} alt="" />
        </div>

        <div className="icons">
          <div className="twons">
            <img src={"Subtract.svg"} alt="" />
            <img src={"bell.svg"} alt="" />
            <div className="line">
              <img src={"line.svg"} alt="" />
            </div>
          </div>
          <div className="user">
            <div className="name">
              <strong>Jacques Kagabo</strong>
            </div>

            <img src={"profile.svg"} alt="" className="me" />
          </div>
        </div>
      </nav>
    </div>
  );
};


export default NavBarVans