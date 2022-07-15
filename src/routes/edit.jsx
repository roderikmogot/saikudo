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

  const [showFoods, setShowFoods] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showPackets, setShowPackets] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const allItems = [...allFood, ...allDrinks, ...allPackets, ...allExtras];

  const [showItems, setShowItems] = useState(allItems);

  console.log(showItems);

  return (
    <div>
      <AdminNavBar />
      <div className="order">
        <div className="order-container">
          <div className="order-list">
            <div className="order-title">Pilih menu disini</div>
            <div className="order-category">
              <div onClick={() => setShowItems(allFood)}>
                <Category
                  icon={<FaUtensilSpoon size={25} />}
                  type="Makanan"
                  onClick={() => setShowItems(allFood)}
                />
              </div>
              <div onClick={() => setShowItems(allDrinks)}>
                <Category icon={<FaGlassCheers size={25} />} type="Minuman" />
              </div>
              <div onClick={() => setShowItems(allPackets)}>
                <Category icon={<FaThLarge size={25} />} type="Packet" />
              </div>
              <div onClick={() => setShowItems(allExtras)}>
                <Category icon={<FaPlus size={25} />} type="Cemilan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-of-foods">
        {showItems.map((item) => {
          return (
            <FoodMenu
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

      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
}

export default Edit;
