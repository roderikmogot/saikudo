import React, { useState } from "react";
import Logo from "../img/logo.png";
import LogoSM from "../img/logo_sm.png";

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
  const [totalPayment, setTotalPayment] = useState(0);

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
    const filterFood = availableFoods.filter((food) => {
      return food.title.toLowerCase().includes(e);
    });
    setFilterItems(filterFood);
  };

  if (searchInput === "" && filterItems.length !== 0) {
    setFilterItems([]);
  }

  const addMenuHandler = (e, item) => {
    for (let i = 0; i < listOfOrders.length; i++) {
      if (item.title === listOfOrders[i]["title"]) {
        let updateExisting = listOfOrders.map((order, i) => {
          if (order.title === item.title) {
            return { ...order, quantity: order.quantity + 1 };
          } else {
            return order;
          }
        });
        setListOfOrders([...updateExisting]);
        updatePriceHandler([...updateExisting]);
        return;
      }
    }
    setListOfOrders([...listOfOrders, item]);
    updatePriceHandler([...listOfOrders, item]);
  };

  const updatePriceHandler = (listOfOrders) => {
    let totalPrice = 0;
    listOfOrders.map((order, i) => {
      let price = order.price.split(".").join("");
      totalPrice += +price * order.quantity;
      return order;
    });
    setTotalPayment(totalPrice);
  };

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
                          addItem={addMenuHandler}
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
                        addItem={addMenuHandler}
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
                    <React.Fragment>
                      <div key={idx} className="list-of-orders-selection">
                        {order.quantity} &nbsp; {order.title}
                      </div>
                      <hr
                        style={{
                          marginTop: ".5em",
                          border: "1px solid #ccc",
                        }}
                      />
                    </React.Fragment>
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
              {totalPayment !== 0 && (
                <React.Fragment>
                  <div className="list-of-orders-total-payment-subtotal">
                    Subtotal
                  </div>
                  <div className="list-of-orders-total-payment-subtotal-price">
                    Rp{" "}
                    {Intl.NumberFormat("en-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                      .format(totalPayment)
                      .replace(/[IDR]/gi, "")
                      .replace(/(\.+\d{2})/, "")
                      .trimLeft()}
                  </div>
                </React.Fragment>
              )}
            </div>
            <hr />
            <div className="submit-order">
              <button>Lanjutkan Pesanan</button>
            </div>

            <div className="order-modal">
              <div className="order-modal-content">
                <div className="order-modal-body">
                  <img className="order-logo" src={LogoSM} alt="Logo" />
                  <div>
                    <div className="order-greetings">Arigatōgozaimashita</div>
                    <div className="order-greetings">
                      Pesanan Anda sedang disiapkan
                    </div>
                  </div>
                  <div className="order-go-to-cashier">
                    Silakan lanjutkan proses pembayaran di kasir
                  </div>
                  <div className="order-finish-button">
                    <button>Click untuk lanjutkan pesanan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
