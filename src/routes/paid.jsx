// import Logo from "../img/logo.png";
import "../css/Paid.css";

import OrderInfo from "../components/OrderInfo";
import AdminNavBar from "../components/AdminNavBar";

import orders from "../backend/orders.json";

function Paid() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        {orders.map((order, i) => {
          if (order.isPaid === true && order.isComplete === false) {
            return (
              <OrderInfo
                key={i}
                id={order.id}
                user={order.userName}
                tableNum={order.tableNum}
                orderList={order.listOfOrders}
                totalPayment={order.total}
                isPaid={order.isPaid}
                isComplete={order.isComplete}
                date={order.date}
              />
            );
          } else {
            return null
          }
        })}
      </div>
    </div>
  );
}

export default Paid;
