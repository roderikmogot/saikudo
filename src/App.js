import React, { useState } from "react";

import "./css/App.css";
import Logo from "./img/logo.png";

import { Link } from "react-router-dom";

function NewOrder() {
  const [userName, setUserName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [tableNum, setTableNum] = useState("");

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-logo">
          <img className="img-logo" src={Logo} alt="Logo" />
        </div>
        <div className="app-title-order">
          Silahkan isi data berikut untuk
          <br /> melakukan pemesanan
        </div>
        <div className="app-table-form">
          <input
            className="app-table-text"
            type="text"
            placeholder="Nama Pemesan"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="app-table-text"
            type="text"
            placeholder="Nomor Meja"
            onChange={(e) => setTableNum(e.target.value)}
          />
          <input
            className="app-table-text"
            type="text"
            placeholder="Nomor Telepon (optional)"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="app-table-form-submit">
          <button className="app-submit" type="submit">
            <Link
              to="/order"
              style={{ textDecoration: "none", color: "white" }}
              state={[
                {
                  userName: userName,
                  tableNum: tableNum,
                  phoneNum: phoneNum,
                },
              ]}
            >
              Konfirmasi
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
