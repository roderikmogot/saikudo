import Logo from "../img/logo.png";
import "../css/History.css";

import AdminNavBar from "../components/AdminNavBar";
import OrderInfo from "../components/OrderInfo";

function History() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={true} isComplete={true} />
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={true} isComplete={true} />
      </div>
    </div>
  );
}

export default History;
