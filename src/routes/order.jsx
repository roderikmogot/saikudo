import axios from "axios";
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
import orders from "../backend/orders.json";

function Order() {
  // Get data from App.js
  const location = useLocation();
  const data = location.state;

  const [listOfOrders, setListOfOrders] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showPacketModal, setShowPacketModal] = useState(false);
  const [jenisKuah, setJenisKuah] = useState("");
  const [listOfCemilan, setListOfCemilan] = useState([]);
  const [packetNameModal, setPacketNameModal] = useState("");

  console.log(jenisKuah);

  const allFoods = [...makanan, ...minuman, ...packet];
  const [showItems, setShowItems] = useState(allFoods);

  const [filterItems, setFilterItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let availableFoods = showItems.filter(
    (food) => food.isStocked === "Yes" || food.isStocked === true
  );

  if (!data) {
    return (window.location.href = "http://localhost:3000/");
  }

  const userName = data[0]["userName"];
  const tableNum = data[0]["tableNum"];
  if (userName === null || tableNum === null) {
    return (window.location.href = "http://localhost:3000/");
  }
  if (userName === "" || tableNum === "") {
    return (window.location.href = "http://localhost:3000/");
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
    console.log(totalPrice);
    setTotalPayment(totalPrice);
  };

  const pushOrderToCashierHandler = async (e) => {
    // lanjutkan ke cashier
    const orderData = {
      id: `18810 - ${orders.length + 1}`,
      ...order,
      listOfOrders: listOfOrders,
      total: totalPayment,
      isPaid: false,
      isComplete: false,
    };

    const newOrder = [...orders, orderData];
    try {
      await axios.post("http://localhost:3030/add_order", {
        newOrder,
      });
    } catch (err) {
      console.log("Something happened..!");

      setTimeout(() => {
        return (window.location.href = "http://localhost:3000/home");
      }, 500);
    }
  };

  const packetModalHandler = (e, packetName) => {
    setPacketNameModal(packetName);
    setShowPacketModal(true);
  };

  const incCemilanHandler = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };

    let isInList = false;
    for (let i = 0; i < listOfCemilan.length; i++) {
      if (listOfCemilan[i]["title"] === item.title) {
        let updateCemilan = listOfCemilan.map((cemilan) => {
          if (cemilan.title === item.title) {
            return { ...cemilan, quantity: cemilan.quantity + 1 };
          } else {
            return cemilan;
          }
        });
        isInList = true;
        setListOfCemilan(updateCemilan);
        break;
      }
    }

    if (!isInList) {
      setListOfCemilan([...listOfCemilan, newItem]);
    }
  };

  const decCemilanHandler = (item) => {
    const { title } = item;
    const newListCemilan = [];
    let isInList = false;
    for (let i = 0; i < listOfCemilan.length; i++) {
      if (listOfCemilan[i]["title"] === title) {
        isInList = true;
      }
    }

    if (isInList) {
      for (let i = 0; i < listOfCemilan.length; i++) {
        if (listOfCemilan[i].title === item.title) {
          if (listOfCemilan[i].quantity === 1) {
            continue;
          } else {
            newListCemilan.push({
              ...listOfCemilan[i],
              quantity: listOfCemilan[i].quantity - 1,
            });
          }
        } else {
          newListCemilan.push(listOfCemilan[i]);
        }
      }
      setListOfCemilan(newListCemilan);
    }
  };

  console.log(listOfCemilan);

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 3) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
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
                          type={food.type}
                          packetHandler={packetModalHandler}
                          broth={food.broth}
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
                        type={food.type}
                        addItem={addMenuHandler}
                        packetHandler={packetModalHandler}
                        broth={food.broth}
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
                    Rp {commafy(totalPayment)}
                  </div>
                </React.Fragment>
              )}
            </div>
            <hr />
            <div className="submit-order">
              <button
                onClick={() => {
                  if (listOfOrders.length < 1) {
                    return;
                  } else {
                    setShowOrderModal(true);
                  }
                }}
              >
                Lanjutkan Pesanan
              </button>
            </div>
            {showOrderModal === true && (
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
                      <button onClick={pushOrderToCashierHandler}>
                        Click untuk lanjutkan pesanan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showPacketModal === true && (
              <div className="packet-modal">
                <div className="packet-modal-content">
                  <div className="packet-modal-body">
                    <div className="packet-modal-heading">
                      <div className="packet-title">
                        {packetNameModal.title}
                      </div>
                      <div className="packet-description">
                        {packetNameModal.description}
                      </div>
                    </div>
                    <div className="packet-jenis-kuah">
                      <div className="packet-jenis-kuah-title">Jenis Kuah</div>

                      <div className="packet-jenis-kuah-grid">
                        {packetNameModal.broth.length > 0 &&
                          packetNameModal.broth.map((item, i) => {
                            return (
                              <label class="labelexpanded">
                                <input
                                  type="radio"
                                  name="targetgroup"
                                  onChange={(e) => setJenisKuah(item)}
                                />
                                <div class="radio-btns">
                                  {/* <img src={Logo} alt=""/> */}
                                  <p>{item}</p>
                                </div>
                              </label>
                            );
                          })}
                      </div>
                      <div className="packet-cemilan-title">
                        Cemilan Tambahan
                      </div>
                      <div className="packet-cemilan-grid">
                        {cemilan.map((item, i) => {
                          if (item.packet === packetNameModal.title) {
                            return (
                              <>
                                <div className="cemilan">
                                  <div className="cemilan-image">
                                    {/* <img
                                      className="image"
                                      src={image}
                                      width="100%"
                                      alt="Food"
                                    /> */}
                                  </div>
                                  <div className="cemilan-id">
                                    <div className="cemilan-title">
                                      {item.title.charAt(0).toUpperCase() +
                                        item.title.slice(1)}
                                    </div>
                                    <div className="cemilan-price">
                                      Rp {item.price}
                                    </div>
                                    <div className="cemilan-select">
                                      <button
                                        onClick={() => decCemilanHandler(item)}
                                      >
                                        -
                                      </button>
                                      {listOfCemilan.map((cemilan) => {
                                        if (cemilan.title === item.title) {
                                          return <>{cemilan.quantity}</>;
                                        } else {
                                          return null;
                                        }
                                      })}
                                      <button
                                        onClick={() => incCemilanHandler(item)}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
