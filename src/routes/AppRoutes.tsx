import { Route, Routes } from "react-router"
import AppLayout from "../layouts/AppLayout"
import HomePage from "../pages/HomePage"
import MyPlanPage from "../pages/MyPlanPage"
import RouterSettingPage from "../pages/RouterSettingPage"
import BillsPaymentPage from "../pages/BillsPaymentPage"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="my-plan" element={<MyPlanPage />} />
            <Route path="router-settings" element={<RouterSettingPage />} />
            <Route path="bills-and-payments" element={<BillsPaymentPage />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes