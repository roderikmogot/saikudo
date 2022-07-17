import React, { useState } from "react";
import Logo from "../img/logo.png";

import "../css/Order.css";

import { FaGlassCheers, FaUtensilSpoon, FaThLarge } from "react-icons/fa";
import FoodItem from "../components/FoodItem";
import Category from "../components/Category";

import { useLocation } from "react-router-dom";

import makanan from "../backend/foods.json";
import minuman from "../backend/drinks.json";
import packet from "../backend/packets.json";
import cemilan from "../backend/extras.json";

function Order() {
  // Get data from App.js
  const location = useLocation();
  const data = location.state;

  const [listOfOrders, setListOfOrders] = useState([]);

  const allFoods = [...makanan, ...minuman, ...packet];
  const [showItems, setShowItems] = useState(allFoods);

  const [filterItems, setFilterItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let availableFoods = showItems.filter(
    (food) => food.isStocked === "Yes" || food.isStocked === true
  );

  if (
    data[0]["userName"] === "" ||
    !data[0]["userName"] ||
    !data[0]["tableNum"] ||
    data[0]["tableNum"] === ""
  ) {
    return (window.location.href = "http://localhost:3000/home");
  }

  const order = { ...data[0] };

  const searchMenuHandler = (e) => {
    e = e.toLowerCase();
    console.log(e);
    const filterFood = availableFoods.filter((food) => {
      return food.title.toLowerCase().includes(e);
    });
    setFilterItems(filterFood);
  };

  if(searchInput === "" && filterItems.length !== 0){
    setFilterItems([])
  }

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
            onChange={(e) => {
              searchMenuHandler(e.target.value);
              setSearchInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="main-order-container">
        <div className="order">
          <div className="order-container">
            <div className="order-list">
              <div className="order-title">Pilih menu disini</div>
              <div
                className="order-category"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  onClick={() => {
                    setShowItems(makanan);
                  }}
                >
                  <Category
                    icon={<FaUtensilSpoon size={25} />}
                    type="Makanan"
                  />
                </div>
                <div
                  onClick={() => {
                    setShowItems(minuman);
                  }}
                >
                  <Category icon={<FaGlassCheers size={25} />} type="Minuman" />
                </div>
                <div
                  onClick={() => {
                    setShowItems(packet);
                  }}
                >
                  <Category icon={<FaThLarge size={25} />} type="Packet" />
                </div>
              </div>
            </div>
          </div>
          {(() => {
            console.log(searchInput, filterItems.length)
            if (filterItems.length > 0 || searchInput) {
              return (
                <div className="list-of-foods">
                  {filterItems.length > 0 &&
                    filterItems.map((food) => {
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
                </div>
              );
            } else {
              return (
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
                </div>
              );
            }
          })()}
        </div>

        <div className="list-of-orders">
          <div>
            <div className="list-of-orders-title">Pesanan Anda</div>
            <div className="list-of-orders-list">
              {listOfOrders.length > 0 &&
                listOfOrders.map((order, idx) => {
                  return (
                    <div key={idx} className="list-of-orders-selection">
                      {order.title}
                    </div>
                  );
                })}
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
