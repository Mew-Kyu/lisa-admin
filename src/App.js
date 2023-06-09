import NotFound from "containers/404";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "components/Layout";
import Dashboard from "containers/Dashboard";
import Products from "containers/Products";
import Customers from "containers/Customers";
import Orders from "containers/Orders";
import Shipments from "containers/Shipments";
import Transactions from "containers/Transactions";
import Settings from "containers/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product" element={<Products />} />
        <Route path="customer" element={<Customers />} />
        <Route path="order" element={<Orders />} />
        <Route path="shipment" element={<Shipments />} />
        <Route path="transaction" element={<Transactions />} />
        <Route path="setting" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
