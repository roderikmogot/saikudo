import { useState } from "react";
import "../css/Modal.css";

import allFood from "../backend/foods.json";

const Modal = ({ show, onClose }) => {
  const [newMenuImage, setNewMenuImage] = useState("");
  const [newMenuName, setNewMenuName] = useState("");
  const [newMenuDescription, setNewMenuDescription] = useState("");
  const [newMenuPrice, setNewMenuPrice] = useState("");
  const [newMenuIsStocked, setNewMenuIsStocked] = useState("Yes");

  if (!show) {
    return null;
  }

  const addNewMenuHandler = (e) => {
    if (newMenuPrice && newMenuName && newMenuDescription) {
      let isStocked = true;

      if (newMenuIsStocked !== "Yes") {
        isStocked = false;
      }

      const newMenu = {
        type: "Makanan",
        price: newMenuPrice,
        title: newMenuName,
        description: newMenuDescription,
        isStocked: isStocked,
        imagePath: newMenuImage,
      };

      allFood.push(newMenu);

      // save file
      const allFoodJSON = JSON.stringify(allFood);
      const blob = new Blob([allFoodJSON], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "foods.json";
      link.href = url;
      link.click();
    }

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Add new menu</h4>
        </div>
        <div className="modal-body">
          <div className="new-menu-form">
            Masukkan nama gambar:
            <input
              required
              className="app-table-text"
              type="text"
              placeholder="Masukkan nama gambar (dengan format)"
              onChange={(e) => setNewMenuImage(e.target.value)}
            />
            Masukkan nama makanan:
            <input
              required
              className="app-table-text"
              type="text"
              placeholder="Masukkan nama makanan"
              onChange={(e) => setNewMenuName(e.target.value)}
            />
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
        </div>
        <div className="modal-footer">
          <button className="button" onClick={onClose}>
            Batal
          </button>
          <button className="button" onClick={addNewMenuHandler}>
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
