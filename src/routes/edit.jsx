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
import EditMenuModal from "../components/EditMenuModal";
import { useState } from "react";

import allFood from "../backend/foods.json";
import allDrinks from "../backend/drinks.json";
import allPackets from "../backend/packets.json";
import allExtras from "../backend/extras.json";

function Edit() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState([]);

  const [packetColor, setPacketColor] = useState(false);
  const [makananColor, setMakananColor] = useState(true);
  const [minumanColor, setMinumanColor] = useState(false);
  const [cemilanColor, setCemilanColor] = useState(false);

  const [modalFoodType, setModalFoodType] = useState("makanan");

  const allItems = [...allFood];

  const [showItems, setShowItems] = useState(allItems);

  const editModalHandler = (e) => {
    setEditModalData(e);
  };

  const showModalHandler = (e) => {
    setShowEditModal(true);
  };

  return (
    <div>
      <AdminNavBar />
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
                  setShowItems(allFood);
                  setModalFoodType("makanan");

                  setMakananColor(true);
                  setMinumanColor(false);
                  setPacketColor(false);
                  setCemilanColor(false);
                }}
              >
                <Category
                  icon={<FaUtensilSpoon size={25} color={makananColor} />}
                  type="Makanan"
                  color={makananColor}
                />
              </div>
              <div
                onClick={() => {
                  setShowItems(allDrinks);
                  setModalFoodType("minuman");

                  setMakananColor(false);
                  setMinumanColor(true);
                  setPacketColor(false);
                  setCemilanColor(false);
                }}
              >
                <Category
                  icon={<FaGlassCheers size={25}  />}
                  type="Minuman"
                  color={minumanColor}
                />
              </div>
              <div
                onClick={() => {
                  setShowItems(allPackets);
                  setModalFoodType("packet");

                  setMakananColor(false);
                  setMinumanColor(false);
                  setPacketColor(true);
                  setCemilanColor(false);
                }}
              >
                <Category
                  icon={<FaThLarge size={25}  />}
                  type="Paket"
                  color={packetColor}
                />
              </div>
              <div
                onClick={() => {
                  setShowItems(allExtras);
                  setModalFoodType("cemilan");
                  setMakananColor(false);
                  setMinumanColor(false);
                  setPacketColor(false);
                  setCemilanColor(true);
                }}
              >
                <Category
                  icon={<FaPlus size={25} />}
                  type="Cemilan"
                  color={cemilanColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-of-foods">
        {showItems.map((item, index) => {
          return (
            <FoodMenu
              id={index}
              allData={showItems}
              foodType={modalFoodType}
              key={index}
              image={Logo}
              title={item.title}
              description={item.description}
              price={item.price}
              paket={item.packet}
              tusuk={item.tusuk}
              editModal={editModalHandler}
              displayModal={showModalHandler}
            />
          );
        })}
      </div>

      <div className="add-new-menu-button" onClick={() => setShowModal(true)}>
        <FaPlus size={25} style={{ color: "#fff" }} />
      </div>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        foodType={modalFoodType}
      />
      <EditMenuModal
        onClose={() => setShowEditModal(false)}
        show={showEditModal}
        id={editModalData.id}
        allData={editModalData.allData}
        foodType={editModalData.foodType}
        image={editModalData.image}
        title={editModalData.title}
        description={editModalData.description}
        price={editModalData.price}
        paket={editModalData.paket}
        tusuk={editModalData.tusuk}
      />
    </div>
  );
}

export default Edit;
