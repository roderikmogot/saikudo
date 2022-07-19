import Logo from "../img/logo.png";
import "../css/History.css";

import AdminNavBar from "../components/AdminNavBar";
import OrderInfo from "../components/OrderInfo";

import orders from "../backend/orders.json"

function History() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        {orders.map((order, i) => {
          if (order.isPaid === true && order.isComplete === true) {
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
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default History;
