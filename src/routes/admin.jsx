// import Logo from "../img/logo.png";
import "../css/Admin.css";

import OrderInfo from "../components/OrderInfo";
import AdminNavBar from "../components/AdminNavBar";

import orders from "../backend/orders.json";

function Admin() {
  return (
    <div className="admin">
      <AdminNavBar />
      <div className="admin-navigation-unpaid">
        {orders.map((order, i) => {
          if (order.isPaid === false && order.isComplete === false) {
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

export default Admin;
