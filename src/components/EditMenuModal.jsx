import "../css/EditModal.css";

import { useState, useEffect } from "react";
import axios from "axios";

import makanan from "../backend/foods.json";
import minuman from "../backend/drinks.json";
import packet from "../backend/packets.json";
import cemilan from "../backend/extras.json";

const EditMenuModal = ({
  onClose,
  show,
  id,
  allData,
  foodType,
  image,
  title,
  description,
  price,
  paket,
}) => {
  const [editMenuImage, setEditMenuImage] = useState(image);
  const [editMenuName, setEditMenuName] = useState(title);
  const [editMenuDescription, setEditMenuDescription] = useState(description);
  const [editMenuPrice, setEditMenuPrice] = useState(price);
  const [editMenuPacketType, setEditMenuPacketType] = useState(paket);
  const [editMenuIsStocked, setEditMenuIsStocked] = useState("Yes");

  useEffect(() => {
    setEditMenuName(title);
    setEditMenuImage(image);
    setEditMenuDescription(description);
    setEditMenuPacketType(paket);
    setEditMenuPrice(price);
  }, [title, image, description, price, paket]);

  if (!show) {
    return null;
  }

  const editMenuHandler = async (e) => {
    // Cemilan, Makanan, Minuman, Paket

    let newMenu = {
      type: foodType,
      price: editMenuPrice,
      title: editMenuName,
      description: editMenuDescription,
      isStocked: editMenuIsStocked,
      imagePath: editMenuImage,
    };

    if (foodType === "Cemilan" || foodType === "cemilan") {
      newMenu = {
        price: editMenuPrice,
        title: editMenuName,
        description: editMenuDescription,
        isStocked: editMenuIsStocked,
        imagePath: editMenuImage,
        packet: editMenuPacketType,
      };
    }

    allData[id] = newMenu;
    const allMenu = allData;

    try {
      await axios.post(`http://localhost:3030/add_${foodType.toLowerCase()}`, {
        allMenu,
      });
    } catch (err) {
      setTimeout(() => {
        onClose();
      }, 500);
      console.log("Error submitting data ", err);
    }
  };

  const deleteMenuHandler = async (e) => {
    allData.splice(id, 1);
    const allMenu = allData;

    try {
      await axios.post(`http://localhost:3030/add_${foodType.toLowerCase()}`, {
        allMenu,
      });
    } catch (err) {
      setTimeout(() => {
        onClose();
      }, 500);
      console.log("Error submitting data ", err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Add new {foodType}</h4>
        </div>
        <div className="modal-body">
          <div className="new-menu-form">
            Edit nama gambar:
            <input
              required
              className="app-table-text"
              type="text"
              value={editMenuImage}
              placeholder={`${image}`}
              onChange={(e) => setEditMenuImage(e.target.value)}
            />
            Edit nama:
            <input
              required
              className="app-table-text"
              type="text"
              value={editMenuName}
              placeholder={`Masukkan nama ${foodType}`}
              onChange={(e) => setEditMenuName(e.target.value)}
            />
            Edit deskripsi:
            <input
              required
              className="app-table-text"
              type="text"
              value={editMenuDescription}
              placeholder={`${description}`}
              onChange={(e) => setEditMenuDescription(e.target.value)}
            />
            Edit harga:
            <input
              required
              className="app-table-text"
              type="text"
              value={editMenuPrice}
              placeholder={`${price}`}
              onChange={(e) => setEditMenuPrice(e.target.value)}
            />
          </div>
          <div className="new-menu-is-available">
            Tersedia:
            <select
              required
              value={editMenuIsStocked}
              onChange={(e) => setEditMenuIsStocked(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {(foodType === "Cemilan" || foodType === "cemilan") && (
            <div className="new-menu-is-available">
              Edit Paket:
              <select
                required
                value={editMenuPacketType}
                onChange={(e) => setEditMenuPacketType(e.target.value)}
              >
                {packet.map((paket) => {
                  return (
                    <option key={paket.title} value={paket.title}>
                      {paket.title}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            Batal
          </button>
          <button className="button" onClick={deleteMenuHandler}>
            Delete
          </button>
          <button className="button" onClick={editMenuHandler}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMenuModal;
