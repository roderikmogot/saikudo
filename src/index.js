import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Admin from "./routes/admin";
import Order from "./routes/order";
import Paid from "./routes/paid";
import History from "./routes/history";
import Edit from "./routes/edit";
import Home from "./routes/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="order" element={<Order />} />
      <Route path="admin" element={<Admin />} />
      <Route path="paid" element={<Paid />} />
      <Route path="history" element={<History />} />
      <Route path="edit" element={<Edit />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
