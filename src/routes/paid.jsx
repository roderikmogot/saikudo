// import Logo from "../img/logo.png";
import "../css/Paid.css";

import OrderInfo from "../components/OrderInfo";
import AdminNavBar from "../components/AdminNavBar";

function Paid() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={true} isComplete={false} />
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={true} isComplete={false} />
        <OrderInfo id="#1808 - 321" user="Setyo Adi Nugraha" tableNum="12" totalPayment="31.000" isPaid={true} isComplete={false} />
      </div>
    </div>
  );
}

export default Paid;
