import Logo from "../img/logo.png";
import "../css/Admin.css";

import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
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
            <Link
              to="/paid"
              style={{ textDecoration: "none", color: "#745656" }}
            >
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
      <div className="admin-navigation-unpaid">
        <div className="unpaid-order">
          <div className="unpaid-order-id">#1808 - 321</div>
          <div className="unpaid-order-wrapper">
            <div className="unpaid-order-user">
              <div className="unpaid-order-user-title">Nama Pemesanan</div>
              <div className="unpaid-order-user-name">Setyo Adi Nugraha</div>
            </div>
            <div className="unpaid-order-user-table">
              <div className="unpaid-order-user-table-title">No Meja</div>
              <div className="unpaid-order-user-table-number">12</div>
            </div>
          </div>
          <div className="unpaid-order-snack">
            <div className="unpaid-order-snack-title">Snack</div>
            <div className="unpaid-order-snack-lists">
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* <hr /> */}
          {/* Drinks */}
          <div className="unpaid-order-snack">
            <div className="unpaid-order-snack-title">Drink</div>
            <div className="unpaid-order-snack-lists">
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Ice Tea</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Ice Tea</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="unpaid-order-total-amount">
            <div className="unpaid-order-total-amount-title">Total Harga:</div>
            <div className="unpaid-order-total-amount-price">Rp 30.000</div>
          </div>

          <div class="complete-order">
          <a className="cancel-order" href="#">Batal</a>
            <a href="#">Sudah bayar</a>
          </div>
        </div>
        <div className="unpaid-order">
          <div className="unpaid-order-id">#1808 - 321</div>
          <div className="unpaid-order-wrapper">
            <div className="unpaid-order-user">
              <div className="unpaid-order-user-title">Nama Pemesanan</div>
              <div className="unpaid-order-user-name">Setyo Adi Nugraha</div>
            </div>
            <div className="unpaid-order-user-table">
              <div className="unpaid-order-user-table-title">No Meja</div>
              <div className="unpaid-order-user-table-number">12</div>
            </div>
          </div>
          <div className="unpaid-order-snack">
            <div className="unpaid-order-snack-title">Snack</div>
            <div className="unpaid-order-snack-lists">
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Shrimp Roll</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* <hr /> */}
          {/* Drinks */}
          <div className="unpaid-order-snack">
            <div className="unpaid-order-snack-title">Drink</div>
            <div className="unpaid-order-snack-lists">
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Ice Tea</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
              <div className="unpaid-order-snack-items">
                <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
                <div className="unpaid-order-snack-item">
                  <div className="unpaid-order-snack-name">Ice Tea</div>
                  <div className="unpaid-order-snack-quantity">1 item</div>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="unpaid-order-total-amount">
            <div className="unpaid-order-total-amount-title">Total Harga:</div>
            <div className="unpaid-order-total-amount-price">Rp 30.000</div>
          </div>

          <div class="complete-order">
            <a className="cancel-order" href="#">Batal</a>
            <a href="#">Sudah bayar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
