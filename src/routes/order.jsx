import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const [packetColor, setPacketColor] = useState(true);
  const [makananColor, setMakananColor] = useState(false);
  const [minumanColor, setMinumanColor] = useState(false);

  const [listOfOrders, setListOfOrders] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [jumlahTusukCemilan, setJumlahTusukCemilan] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showPacketModal, setShowPacketModal] = useState(false);
  const [jenisKuah, setJenisKuah] = useState("");
  const [listOfCemilan, setListOfCemilan] = useState([]);
  const [packetNameModal, setPacketNameModal] = useState("");

  const allFoods = [...packet];
  const [showItems, setShowItems] = useState(allFoods);

  const [filterItems, setFilterItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let availableFoods = showItems.filter(
    (food) => food.isStocked === "Yes" || food.isStocked === true
  );

  if (!data) {
    return (window.location.href = "http://localhost:3000/home");
  }

  const userName = data[0]["userName"];
  const tableNum = data[0]["tableNum"];
  if (userName === null || tableNum === null) {
    return (window.location.href = "http://localhost:3000/home");
  }
  if (userName === "" || tableNum === "") {
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

  const pushOrderToCashierHandler = async (e) => {
    // lanjutkan ke cashier
    const date = new Date();
    const getMonth = date.getMonth() + 1;
    const getDate = date.getDate();
    const getYear = date.getFullYear();
    const getHour = date.getHours();
    const getMinute = String(date.getMinutes()).padStart(2, "0");
    const todayDate = `${getMonth}/${getDate}/${getYear} ${getHour}:${getMinute}`;

    const orderData = {
      id: `18810 - ${orders.length + 1}`,
      date: todayDate,
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

  const incCemilanHandler = (item, maxTusuk) => {
    maxTusuk = +maxTusuk;
    if (jumlahTusukCemilan === maxTusuk) {
      return;
    }

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
        setJumlahTusukCemilan(jumlahTusukCemilan + 1);
        break;
      }
    }

    if (!isInList) {
      setListOfCemilan([...listOfCemilan, newItem]);
      setJumlahTusukCemilan(jumlahTusukCemilan + 1);
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
      setJumlahTusukCemilan(jumlahTusukCemilan - 1);
    }
  };

  const addPacketHandler = (e) => {
    // title: '4', price: '12312', quantity: 5, type: 'minuman'
    if (jenisKuah.length > 0) {
      const packetAndKuahTitle = packetNameModal.title + " - " + jenisKuah;

      let newPacket = {
        title: packetAndKuahTitle,
        price: packetNameModal.price,
        quantity: 1,
        type: "packet",
      };

      if (listOfCemilan.length > 0) {
        // ada nih cemilannya
        let totalPriceCemilan = 0;
        for (let i in listOfCemilan) {
          let price = listOfCemilan[i].price.split(".").join("");
          totalPriceCemilan += +price * listOfCemilan[i].quantity;
        }
        let getPacketPrice = packetNameModal.price;
        getPacketPrice = getPacketPrice.replace(".", "");
        getPacketPrice = +getPacketPrice;
        totalPriceCemilan += getPacketPrice;

        totalPriceCemilan = commafy(totalPriceCemilan.toString());
        totalPriceCemilan = totalPriceCemilan.replace(",", ".");

        newPacket = {
          title: packetAndKuahTitle,
          price: totalPriceCemilan,
          extras: [...listOfCemilan],
          quantity: 1,
          type: "packet",
        };

        setListOfOrders([...listOfOrders, newPacket]);
        updatePriceHandler([...listOfOrders, newPacket]);
        setJumlahTusukCemilan(0);

        setListOfCemilan([]);
        setJenisKuah("");

        setShowPacketModal(false);
        return;
      }

      for (let j = 0; j < listOfOrders.length; j++) {
        if (
          newPacket.title === listOfOrders[j].title &&
          !listOfOrders[j].extras
        ) {
          let updateExisting = listOfOrders.map((order, i) => {
            if (order.title === newPacket.title && !order.extras) {
              return { ...order, quantity: order.quantity + 1 };
            } else {
              return order;
            }
          });
          setListOfOrders([...updateExisting]);
          updatePriceHandler([...updateExisting]);

          setListOfCemilan([]);
          setJenisKuah("");
          setJumlahTusukCemilan(0);

          setShowPacketModal(false);
          return;
        }
      }

      setListOfOrders([...listOfOrders, newPacket]);
      updatePriceHandler([...listOfOrders, newPacket]);
      setJumlahTusukCemilan(0);

      setListOfCemilan([]);
      setJenisKuah("");
    }
    setShowPacketModal(false);
  };

  const deleteMenuHandler = (idx) => {
    let newListOfOrders = [];
    for (let i = 0; i < listOfOrders.length; i++) {
      if (i !== idx) {
        newListOfOrders = [...newListOfOrders, listOfOrders[i]];
      }
    }
    setListOfOrders([...newListOfOrders]);
    updatePriceHandler([...newListOfOrders]);
  };

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

  // console.log(listOfOrders);

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
              <div className="order-title">Pilihan Menu</div>
              <div
                className="order-category"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  onClick={() => {
                    setShowItems(packet);
                    setMakananColor(false);
                    setMinumanColor(false);
                    setPacketColor(true);
                  }}
                >
                  <Category
                    icon={<FaThLarge size={25} />}
                    type="Paket"
                    color={packetColor}
                  />
                </div>
                <div
                  onClick={() => {
                    setShowItems(makanan);
                    setMakananColor(true);
                    setMinumanColor(false);
                    setPacketColor(false);
                  }}
                >
                  <Category
                    icon={<FaUtensilSpoon size={25} />}
                    type="Makanan"
                    color={makananColor}
                  />
                </div>
                <div
                  onClick={() => {
                    setShowItems(minuman);
                    setMakananColor(false);
                    setMinumanColor(true);
                    setPacketColor(false);
                  }}
                >
                  <Category
                    icon={<FaGlassCheers size={25} />}
                    type="Minuman"
                    color={minumanColor}
                  />
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
                          tusuk={food.tusuk}
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
                        tusuk={food.tusuk}
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
                        <div className="order-items">
                          <div className="order-item-quantity-title">
                            <div>{order.quantity}</div>
                            <div>{order.title}</div>
                          </div>
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              background: "none",
                            }}
                            onClick={() => deleteMenuHandler(idx)}
                          >
                            x
                          </button>
                        </div>

                        {order.extras &&
                          order.extras.map((extra, i) => {
                            return (
                              <div style={{ marginLeft: "1.1vw" }}>
                                {extra.quantity} &nbsp; {extra.title}
                              </div>
                            );
                          })}
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
                style={{ border: "none" }}
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
                      <div className="packet-info">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: ".5em",
                          }}
                        >
                          <img
                            style={{
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                              maxHeight: "15vh",
                            }}
                            src={(() => {
                              const titleImage = packetNameModal.title
                                .toString()
                                .replaceAll(" ", "_")
                                .toLowerCase();
                              try {
                                const image = require(`../img/${titleImage}.jpeg`);
                                return image;
                              } catch (err) {}
                              return Logo;
                            })()}
                            alt="Paket"
                          />
                          <div>
                            <div className="packet-title">
                              {packetNameModal.title}
                            </div>
                            <div className="packet-description">
                              {packetNameModal.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button onClick={(e) => addPacketHandler(e)}>
                        Masukan dalam Keranjang
                      </button>
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
                      <div className="packet-cemilan-title">Pilihan isian</div>
                      <div className="packet-cemilan-grid">
                        {cemilan.map((item, i) => {
                          if (item.packet === packetNameModal.title) {
                            return (
                              <>
                                <div className="cemilan">
                                  <div className="cemilan-image">
                                    <img
                                      className="image"
                                      style={{
                                        borderTopLeftRadius: "10px",
                                        borderTopRightRadius: "10px",
                                        maxHeight: "25vh",
                                      }}
                                      src={(() => {
                                        const titleImage = item.title
                                          .toString()
                                          .replaceAll(" ", "_")
                                          .toLowerCase();
                                        try {
                                          const image = require(`../img/${titleImage}.jpeg`);
                                          return image;
                                        } catch (err) {}
                                        return Logo;
                                      })()}
                                      width="100%"
                                      alt="Food"
                                    />
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
                                        onClick={() =>
                                          decCemilanHandler(
                                            item,
                                            packetNameModal.tusuk
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      {(() => {
                                        let hasQuantity = false;
                                        for (
                                          let i = 0;
                                          i < listOfCemilan.length;
                                          i++
                                        ) {
                                          if (
                                            listOfCemilan[i].title ===
                                            item.title
                                          ) {
                                            hasQuantity = true;
                                          }
                                        }
                                        if (hasQuantity) {
                                          for (
                                            let i = 0;
                                            i < listOfCemilan.length;
                                            i++
                                          ) {
                                            if (
                                              listOfCemilan[i].title ===
                                              item.title
                                            ) {
                                              return (
                                                <>{listOfCemilan[i].quantity}</>
                                              );
                                            }
                                          }
                                        } else {
                                          return <>0</>;
                                        }
                                      })()}
                                      <button
                                        onClick={() =>
                                          incCemilanHandler(
                                            item,
                                            packetNameModal.tusuk
                                          )
                                        }
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
                    <button
                      style={{
                        backgroundColor: "red",
                        width: "100%",
                        border: "none",
                        color: "white",
                        padding: ".5em",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setJumlahTusukCemilan(0);
                        setListOfCemilan([]);
                        setJenisKuah("");
                        setShowPacketModal(false);
                      }}
                    >
                      Batal
                    </button>
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
