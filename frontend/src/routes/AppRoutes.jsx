import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMoney from "../pages/AddMoney/AddMoney";
import SendMoney from "../pages/SendMoney/SendMoney";
import Transactions from "../pages/Transactions/Transactions";
import QRPayments from "../pages/QRPayments/QRPayments";
import Analytics from "../pages/Dashboard/Analytics/Analytics";
import Support from "../pages/Support/Support";
import Settings from "../pages/Settings/Settings";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="/add-money" element={<AddMoney/>}></Route>
        <Route path="/send-money" element={<SendMoney></SendMoney>}></Route>
        <Route path='/transactions-page' element={<Transactions></Transactions>}></Route>
        <Route path="/qr-payments" element={<QRPayments></QRPayments>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
        <Route path="support" element={<Support></Support>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;