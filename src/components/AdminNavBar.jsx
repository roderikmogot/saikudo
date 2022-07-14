import "../css/Edit.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="admin-navigation-bar">
      <img className="admin-navigation-logo" src={Logo} alt="Logo" />
      <ul className="admin-navigation">
        <li className="admin-navigation-menu">
          <Link
            to="/admin"
            style={{ textDecoration: "none", color: "#745656" }}
          >
            Unpaid
          </Link>
        </li>

        <li className="admin-navigation-menu">
          <Link to="/paid" style={{ textDecoration: "none", color: "#745656" }}>
            Paid
          </Link>
        </li>
        <li className="admin-navigation-menu">
          <Link
            to="/history"
            style={{ textDecoration: "none", color: "#745656" }}
          >
            Riwayat Pesanan
          </Link>
        </li>
        <li className="admin-navigation-menu">
          <Link
            to="/edit"
            className="admin-navigation-link"
            style={{ textDecoration: "none", color: "#745656" }}
          >
            Ubah Menu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavBar;
