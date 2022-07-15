import React from "react";
import Logo from "../img/logo.png";

import "../css/Order.css";

import { FaGlassCheers, FaUtensilSpoon } from "react-icons/fa";
import FoodItem from "../components/FoodItem";
import Category from "../components/Category";

import { useLocation } from "react-router-dom";

import allFoods from "../backend/foods.json";

function Order() {
  
  // Get data from App.js
  const location = useLocation();
  const data = location.state;

  const order = { ...data[0] };

  console.log(order);

  const availableFoods = allFoods.filter((food) => food.isStocked === true);

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
                <Category icon={<FaGlassCheers size={30} />} type="Minuman" />
                <Category icon={<FaGlassCheers size={30} />} type="Makanan" />
                <Category icon={<FaGlassCheers size={30} />} type="Makanan" />
                <Category icon={<FaGlassCheers size={30} />} type="Makanan" />
              </div>
            </div>
          </div>
          <div className="list-of-foods">
            {availableFoods.map((food) => {
              return (
                <FoodItem
                  key={food.title}
                  image={Logo}
                  title={food.title}
                  description={food.description}
                  price={food.price}
                />
              );
            })}
            <FoodItem
              image={Logo}
              title="Matsuyama"
              description="4 Tusuk (Biru, Hijau & Merah)"
              price="32.000"
            />
            <FoodItem
              image={Logo}
              title="Matsuyama"
              description="4 Tusuk (Biru, Hijau & Merah)"
              price="32.000"
            />
            <FoodItem
              image={Logo}
              title="Matsuyama"
              description="4 Tusuk (Biru, Hijau & Merah)"
              price="32.000"
            />
          </div>
        </div>

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
            <div className="submit-order">
              <a href="#">Lanjutkan Pesanan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
