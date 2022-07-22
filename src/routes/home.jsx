import { Link } from "react-router-dom";
import "../css/Home.css";

import Logo from "../img/logo.png";

function Home() {
  return (
    <Link to="/home" style={{
      textDecoration: 'none',
      color: 'inherit'
    }}>
      <div className="home-container">
        <div className="home-intro">
          <img className="home-logo" src={Logo} alt="Logo" />
          <div className="home-greetings">Arigatōgozaimashita</div>
        </div>
        <div className="home-continue">
          <div className="home-continue-tekan">Tekan</div>
          <div className="home-continue-red-circle"></div>
          <div className="home-continue-disini">Disini</div>
        </div>
      </div>
    </Link>
  );
}

export default Home;
