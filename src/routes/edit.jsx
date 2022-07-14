import "../css/Edit.css";
import Logo from "../img/logo.png";

import { FaGlassCheers, FaUtensilSpoon, FaPlus } from "react-icons/fa";

import Category from "../components/Category";
import FoodMenu from "../components/FoodMenu";
import AdminNavBar from "../components/AdminNavBar";

function Edit() {
  return (
    <div>
      <AdminNavBar />
      <div className="order">
        <div className="order-container">
          <div className="order-list">
            <div className="order-title">Pilih menu disini</div>
            <div className="order-category">
            <Category icon={<FaGlassCheers size={30}/>} type="Minuman" />
                <Category icon={<FaGlassCheers size={30}/>} type="Makanan" />
                <Category icon={<FaGlassCheers size={30}/>} type="Makanan" />
                <Category icon={<FaGlassCheers size={30}/>} type="Makanan" />
            </div>
          </div>
        </div>
      </div>

      <div class="list-of-foods">
        <FoodMenu image={Logo} title="Fukuyama" description="3 Tusuk (biru)" price="21.000" />
        <FoodMenu image={Logo} title="Fukuyama" description="3 Tusuk (biru)" price="21.000" />
        <FoodMenu image={Logo} title="Fukuyama" description="3 Tusuk (biru)" price="21.000" />
        <FoodMenu image={Logo} title="Fukuyama" description="3 Tusuk (biru)" price="21.000" />
        <FoodMenu image={Logo} title="Fukuyama" description="3 Tusuk (biru)" price="21.000" />
      </div>
      <div className="add-new-menu-button">
        <FaPlus size={25} style={{color: "#fff"}}/>
      </div>
    </div>
  );
}

export default Edit;
