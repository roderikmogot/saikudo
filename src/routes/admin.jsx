// import Logo from "../img/logo.png";
import "../css/Admin.css";

import OrderInfo from "../components/OrderInfo";
import AdminNavBar from "../components/AdminNavBar";

function Admin() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={false} isComplete={false} />
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={false} isComplete={false} />
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={false} isComplete={false} />
      </div>
    </div>
  );
}

export default Admin;
