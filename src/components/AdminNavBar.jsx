import "../css/History.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="admin-navigation-bar">
      <img className="admin-navigation-logo" src={Logo} alt="Logo" />
      <ul className="admin-navigation">
        <li className="admin-navigation-li">
          <Link
            className="admin-navigation-menu"
            to="/admin"
          >
            Unpaid
          </Link>
        </li>
        <li className="admin-navigation-li">
          <Link
            className="admin-navigation-menu"
            to="/paid"
          >
            Paid
          </Link>
        </li>
        <li className="admin-navigation-li">
          <Link
            className="admin-navigation-menu"
            to="/history"
          >
            Riwayat Pesanan
          </Link>
        </li>
        <li className="admin-navigation-li">
          <Link
            to="/edit"
            className="admin-navigation-menu"
          >
            Ubah Menu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavBar;
