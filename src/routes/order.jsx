import React from "react";
import Logo from "../img/logo.png";

import "../css/Order.css";

import { FaGlassCheers, FaUtensilSpoon, FaPlus } from "react-icons/fa";
import { BsImage } from "react-icons/bs";

function Order() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <img className="order-img-logo" src={Logo} alt="Logo" />
        <div className="search-bar">
          <input
            className="search-text"
            type="text"
            placeholder="Cari snack, makanan atau minuman..."
          />
        </div>
      </div>
      <div className="main-order-container">
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
          <div class="list-of-foods">
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Fukuyama</div>
                <div class="food-description">3 Tusuk (biru)</div>
                <div class="food-price">Rp 21.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Hiroshima</div>
                <div class="food-description">3 Tusuk (biru & merah)</div>
                <div class="food-price">Rp 26.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
            <div class="food">
              <div class="food-image">
                <img class="image" src={Logo} width="100%" alt="Food" />
              </div>
              <div class="food-id">
                <div class="food-title">Matsuyama</div>
                <div class="food-description">
                  4 Tusuk (Biru, Hijau & Merah)
                </div>
                <div class="food-price">Rp 32.000</div>
                <div class="food-select">
                  <a href="#">
                    Pilih &nbsp;
                    <FaPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div> */}

        <div className="list-of-orders">
          <div>
            <div className="list-of-orders-title">Pesanan Anda</div>
            <div className="list-of-orders-list">
              <div className="list-of-orders-selection">1 Paket Fukuyama</div>
              <div className="list-of-orders-selection">1 Paket Matsuyama</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
              <div className="list-of-orders-selection">1 Paket Hiroshima</div>

              <div className="list-of-orders-selection">1 Paket Hiroshima</div>
            </div>
          </div>

          {/* Total harga */}
          <div className="list-of-orders-total-payment">
            <div className="list-of-orders-total-payment-title">
              Rincian Harga
            </div>
            <div className="list-of-orders-to-pay">
              <div className="list-of-orders-total-payment-subtotal">
                Subtotal
              </div>
              <div className="list-of-orders-total-payment-subtotal-price">
                Rp 21.000
              </div>
            </div>
            <hr />
            <div class="submit-order">
              <a href="#">Lanjutkan Pesanan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
