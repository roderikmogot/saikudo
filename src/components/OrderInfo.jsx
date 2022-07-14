import Logo from "../img/logo.png";

const OrderInfo = ({
  id,
  user,
  tableNum,
  orderList,
  totalPayment,
  isPaid,
  isComplete,
}) => {
  let button = null;

  if (isPaid && isComplete) {
    button = (
      <div class="complete-order">
        <a href="#">Pesanan berhasil</a>
      </div>
    );
  } else if (isPaid && !isComplete) {
    button = (
      <div class="complete-order">
        <a href="#">Pesanan selesai</a>
      </div>
    );
  } else {
    button = (
      <div class="complete-order">
        <a className="cancel-order" href="#">
          Batal
        </a>
        <a href="#">Sudah bayar</a>
      </div>
    );
  }

  return (
    <div className="unpaid-order">
      <div className="unpaid-order-id">{id}</div>
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
        <div className="unpaid-order-snack-title">Snack</div>
        <div className="unpaid-order-snack-lists">
          <div className="unpaid-order-snack-items">
            <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
            <div className="unpaid-order-snack-item">
              <div className="unpaid-order-snack-name">Shrimp Roll</div>
              <div className="unpaid-order-snack-quantity">1 item</div>
            </div>
          </div>
          <hr />
          <div className="unpaid-order-snack-items">
            <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
            <div className="unpaid-order-snack-item">
              <div className="unpaid-order-snack-name">Shrimp Roll</div>
              <div className="unpaid-order-snack-quantity">1 item</div>
            </div>
          </div>
          <hr />
          <div className="unpaid-order-snack-items">
            <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
            <div className="unpaid-order-snack-item">
              <div className="unpaid-order-snack-name">Shrimp Roll</div>
              <div className="unpaid-order-snack-quantity">1 item</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* <hr /> */}
      {/* Drinks */}
      <div className="unpaid-order-snack">
        <div className="unpaid-order-snack-title">Drink</div>
        <div className="unpaid-order-snack-lists">
          <div className="unpaid-order-snack-items">
            <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
            <div className="unpaid-order-snack-item">
              <div className="unpaid-order-snack-name">Ice Tea</div>
              <div className="unpaid-order-snack-quantity">1 item</div>
            </div>
          </div>
          <hr />
          <div className="unpaid-order-snack-items">
            <img className="unpaid-order-snack-img" src={Logo} alt="Food" />
            <div className="unpaid-order-snack-item">
              <div className="unpaid-order-snack-name">Ice Tea</div>
              <div className="unpaid-order-snack-quantity">1 item</div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="unpaid-order-total-amount">
        <div className="unpaid-order-total-amount-title">Total Harga:</div>
        <div className="unpaid-order-total-amount-price">Rp {totalPayment}</div>
      </div>

      {button}
    </div>
  );
};

export default OrderInfo;
