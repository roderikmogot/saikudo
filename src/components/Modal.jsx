import { useState } from "react";
import "../css/Modal.css";

import makanan from "../backend/foods.json";
import minuman from "../backend/drinks.json";
import packet from "../backend/packets.json";
import cemilan from "../backend/extras.json";

import axios from "axios";

const Modal = ({ show, onClose, foodType }) => {
  const [newMenuImage, setNewMenuImage] = useState("");
  const [newMenuName, setNewMenuName] = useState("");
  const [newMenuTusuks, setNewMenuTusuks] = useState("");
  const [newMenuDescription, setNewMenuDescription] = useState("");
  const [newMenuPrice, setNewMenuPrice] = useState("");
  const [newMenuPacketType, setNewMenuPacketType] = useState("");
  const [newBrothType, setNewBrothType] = useState("");
  const [newMenuIsStocked, setNewMenuIsStocked] = useState("Yes");

  if (!show) {
    return null;
  }

  const addNewMenuHandler = async (e) => {
    if (newMenuPrice && newMenuName && newMenuDescription) {
      let isStocked = true;

      if (newMenuIsStocked !== "Yes") {
        isStocked = false;
      }

      let newMenu = {
        type: foodType,
        price: newMenuPrice,
        title: newMenuName,
        description: newMenuDescription,
        isStocked: isStocked,
        imagePath: newMenuImage,
      };

      if (foodType === "cemilan") {
        newMenu = {
          type: foodType,
          price: newMenuPrice,
          title: newMenuName,
          description: newMenuDescription,
          isStocked: isStocked,
          imagePath: newMenuImage,
          packet: newMenuPacketType,
        };
      }

      if (foodType === "packet") {
        newMenu = {
          type: foodType,
          price: newMenuPrice,
          title: newMenuName,
          description: newMenuDescription,
          tusuk: newMenuTusuks,
          isStocked: isStocked,
          imagePath: newMenuImage,
          broth: newBrothType.split(", "),
        };
      }

      const sendDataToBackend = async (foodType, allMenu, newMenu) => {
        allMenu.push(newMenu);

        try {
          await axios.post(`http://localhost:3030/add_${foodType}`, {
            allMenu,
          });
        } catch (err) {
          console.log("Error submitting data ", err);
        }
      };

      if (foodType === "makanan") {
        sendDataToBackend(foodType, makanan, newMenu);
      } else if (foodType === "minuman") {
        sendDataToBackend(foodType, minuman, newMenu);
      } else if (foodType === "packet") {
        sendDataToBackend(foodType, packet, newMenu);
      } else if (foodType === "cemilan") {
        sendDataToBackend(foodType, cemilan, newMenu);
      }
    }

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Add new {foodType}</h4>
        </div>
        <div className="modal-body">
          <div className="new-menu-form">
            Masukkan nama {foodType}:
            <input
              required
              className="app-table-text"
              type="text"
              placeholder={`Masukkan nama ${foodType}`}
              onChange={(e) => setNewMenuName(e.target.value)}
            />
            {foodType === "packet" && (
              <>
                Masukkan jenis kuah:
                <input
                  required
                  className="app-table-text"
                  type="text"
                  placeholder={`format: Biasa, Pedas, ...`}
                  onChange={(e) => setNewBrothType(e.target.value)}
                />
              </>
            )}
            Masukkan deskripsi:
            <input
              required
              className="app-table-text"
              type="text"
              placeholder="Masukkan deskripsi"
              onChange={(e) => setNewMenuDescription(e.target.value)}
            />
            Masukkan harga:
            <input
              required
              className="app-table-text"
              type="text"
              placeholder="Harga (contoh: 21.000)"
              onChange={(e) => setNewMenuPrice(e.target.value)}
            />
            {foodType === "packet" && (
              <>
                Masukkan jumlah tusuk:
                <input
                  required
                  className="app-table-text"
                  type="text"
                  placeholder="Jumlah tusuk (contoh: 1)"
                  onChange={(e) => setNewMenuTusuks(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="new-menu-is-available">
            Tersedia:
            <select
              required
              value={newMenuIsStocked}
              onChange={(e) => setNewMenuIsStocked(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {foodType === "cemilan" && (
            <div className="new-menu-is-available">
              Paket:
              <select
                required
                value={newMenuPacketType}
                onChange={(e) => setNewMenuPacketType(e.target.value)}
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
          <button
            style={{
              backgroundColor: "#666",
              width: "25%",
              border: "none",
              color: "white",
              padding: ".5em",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            className="button"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            style={{
              backgroundColor: "#4c9240",
              width: "25%",
              border: "none",
              color: "white",
              padding: ".5em",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            className="button"
            onClick={addNewMenuHandler}
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
