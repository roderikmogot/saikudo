import "../css/Edit.css";
import Logo from "../img/logo.png";

import { Link } from "react-router-dom";

import { FaGlassCheers, FaUtensilSpoon, FaPlus } from "react-icons/fa";

function Edit() {
  return (
    <div>
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
      <div className="order">
        <div className="order-container">
          <div className="order-list">
            <div className="order-title">Pilih menu disini</div>
            <div className="order-category">
              <button>
                <div className="category">
                  <FaGlassCheers size={30} />
                  <div className="category-description">Minuman</div>
                </div>
              </button>
              <button>
                <div className="category">
                  <FaUtensilSpoon size={30} />
                  <div className="category-description">Makanan</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="list-of-foods">
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="food">
          <div class="food-image">
            <img class="image" src={Logo} width="100%" alt="Food" />
          </div>
          <div class="food-id">
            <div class="food-title">Fukuyama</div>
            <div class="food-description">3 Tusuk (biru)</div>
            <div class="food-end">
              <div class="food-price">Rp 21.000</div>
              <div class="food-select">
                <a href="#">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-new-menu-button">
        <FaPlus size={25} style={{color: "#fff"}}/>
      </div>
    </div>
  );
}

export default Edit;
