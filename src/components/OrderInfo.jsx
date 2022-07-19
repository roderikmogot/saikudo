import Logo from "../img/logo.png";

import orders from "../backend/orders.json";
import axios from "axios";

const OrderInfo = ({
  id,
  user,
  tableNum,
  orderList,
  totalPayment,
  isPaid,
  isComplete,
}) => {
  const submitHandler = async (newOrder) => {
    try {
      await axios.post("http://localhost:3030/add_order", {
        newOrder,
      });
    } catch (err) {
      console.log("Something happened..!");

      setTimeout(() => {}, 500);
    }
  };

  const paidOrderHandler = async (e) => {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]["id"] === id) {
        const editOrder = {
          ...orders[i],
          isPaid: true,
        };
        orders[i] = editOrder;
        break;
      }
    }
    submitHandler(orders);
  };

  const completeOrderHandler = async (e) => {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]["id"] === id) {
        const editOrder = {
          ...orders[i],
          isComplete: true,
        };
        orders[i] = editOrder;
        break;
      }
    }
    submitHandler(orders);
  };

  const cancelOrderHandler = async (e) => {
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]["id"] === id) {
        orders.splice(i, 1);
        break;
      }
    }
    submitHandler(orders);
  };

  let button = null;

  if (isPaid && isComplete) {
    button = (
      <div class="complete-order">
        <button style={{ opacity: "0.5" }} disabled>
          Pesanan berhasil
        </button>
      </div>
    );
  } else if (isPaid && !isComplete) {
    button = (
      <div class="complete-order">
        <button onClick={completeOrderHandler}>Pesanan selesai</button>
      </div>
    );
  } else {
    button = (
      <div class="complete-order">
        <button className="cancel-order" onClick={cancelOrderHandler}>
          Batal
        </button>
        <button onClick={paidOrderHandler}>Sudah bayar</button>
      </div>
    );
  }

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 3) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  return (
    <div className="unpaid-order">
      <div className="unpaid-order-id">#{id}</div>
      <div className="unpaid-order-wrapper">
        <div className="unpaid-order-user">
          <div className="unpaid-order-user-title">Nama Pemesanan</div>
          <div className="unpaid-order-user-name">{user}</div>
        </div>
        <div className="unpaid-order-user-table">
          <div className="unpaid-order-user-table-title">No Meja</div>
          <div className="unpaid-order-user-table-number">{tableNum}</div>
        </div>
      </div>
      {/* Render OrderList -> [] */}
      <div className="unpaid-order-snack">
        <div className="unpaid-order-snack-title">Meals</div>
        <div className="unpaid-order-snack-lists">
          {orderList.map((order, i) => {
            if (order.type === "makanan") {
              return (
                <>
                  <div className="unpaid-order-snack-items">
                    <img
                      className="unpaid-order-snack-img"
                      src={Logo}
                      alt="Food"
                    />
                    <div className="unpaid-order-snack-item">
                      <div className="unpaid-order-snack-name">
                        {order.title}
                      </div>
                      <div className="unpaid-order-snack-quantity">
                        {order.quantity} item
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      {/* <hr /> */}
      {/* Drinks */}
      <div className="unpaid-order-snack">
        <div className="unpaid-order-snack-title">Drinks</div>
        <div className="unpaid-order-snack-lists">
          {orderList.map((order, i) => {
            if (order.type === "minuman") {
              return (
                <>
                  <div className="unpaid-order-snack-items">
                    <img
                      className="unpaid-order-snack-img"
                      src={Logo}
                      alt="Food"
                    />
                    <div className="unpaid-order-snack-item">
                      <div className="unpaid-order-snack-name">
                        {order.title}
                      </div>
                      <div className="unpaid-order-snack-quantity">
                        {order.quantity} item
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="unpaid-order-total-amount">
        <div className="unpaid-order-total-amount-title">Total Harga:</div>
        <div className="unpaid-order-total-amount-price">
          Rp {commafy(totalPayment)}
        </div>
      </div>

      {button}
    </div>
  );
};

export default OrderInfo;
