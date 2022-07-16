import "../css/Edit.css";
import Logo from "../img/logo.png";

import {
  FaGlassCheers,
  FaUtensilSpoon,
  FaPlus,
  FaThLarge,
} from "react-icons/fa";

import Category from "../components/Category";
import FoodMenu from "../components/FoodMenu";
import AdminNavBar from "../components/AdminNavBar";
import Modal from "../components/Modal";
import { useState } from "react";

import allFood from "../backend/foods.json";
import allDrinks from "../backend/drinks.json";
import allPackets from "../backend/packets.json";
import allExtras from "../backend/extras.json";

function Edit() {
  const [showModal, setShowModal] = useState(false);

  const [modalFoodType, setModalFoodType] = useState("makanan");

  const allItems = [...allFood];

  const [showItems, setShowItems] = useState(allItems);

  return (
    <div>
      <AdminNavBar />
      <div className="order">
        <div className="order-container">
          <div className="order-list">
            <div className="order-title">Pilih menu disini</div>
            <div className="order-category" style={{
              display: "flex",
              flexDirection: "row",
            }}>
              <div
                onClick={() => {
                  setShowItems(allFood);
                  setModalFoodType("makanan");
                }}
              >
                <Category icon={<FaUtensilSpoon size={25} />} type="Makanan" />
              </div>
              <div
                onClick={() => {
                  setShowItems(allDrinks);
                  setModalFoodType("minuman");
                }}
              >
                <Category icon={<FaGlassCheers size={25} />} type="Minuman" />
              </div>
              <div
                onClick={() => {
                  setShowItems(allPackets);
                  setModalFoodType("packet");
                }}
              >
                <Category icon={<FaThLarge size={25} />} type="Packet" />
              </div>
              <div
                onClick={() => {
                  setShowItems(allExtras);
                  setModalFoodType("cemilan");
                }}
              >
                <Category icon={<FaPlus size={25} />} type="Cemilan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-of-foods">
        {showItems.map((item, index) => {
          return (
            <FoodMenu
              key={index}
              image={Logo}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>

      {/* Working on this one */}
      <div className="add-new-menu-button" onClick={() => setShowModal(true)}>
        <FaPlus size={25} style={{ color: "#fff" }} />
      </div>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        foodType={modalFoodType}
      />
    </div>
  );
}

export default Edit;
