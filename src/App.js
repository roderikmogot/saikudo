import React from 'react'

import './css/App.css'
import Logo from './img/logo.png'

import { Link } from "react-router-dom";

function NewOrder(){
    return (
        <div className="app">
            <div className="app-container">
                <div className="app-logo">
                    <img className="img-logo" src={Logo} alt="Logo" />
                </div>
                <div className="app-title-order">
                    Silahkan isi data berikut untuk<br/> melakukan pemesanan
                </div>
                <div className="app-table-form">
                    <input className="app-table-text" type="text" placeholder="Nama Pemesan" />
                    <input className="app-table-text" type="text" placeholder="Nomer Meja" />
                    <input className="app-table-text" type="text" placeholder="Nomer Telepon (optional)" />
                </div>
                <div className="app-table-form-submit">
                    <button className='app-submit'><Link to="/order" style={{ textDecoration: 'none', color: 'white' }}>Konfirmasi</Link></button>
                </div>
            </div>
        </div>
    )
}

export default NewOrder