import { Route, Routes } from "react-router"
import AppLayout from "../layouts/AppLayout"
import HomePage from "../pages/HomePage"
import MyPlanPage from "../pages/MyPlanPage"
import RouterSettingPage from "../pages/RouterSettingPage"
import BillsPaymentPage from "../pages/BillsPaymentPage"
import SupportPage from "../pages/SupportPage"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="my-plan" element={<MyPlanPage />} />
            <Route path="router-settings" element={<RouterSettingPage />} />
            <Route path="bills-and-payments" element={<BillsPaymentPage />} />
            <Route path="support" element={<SupportPage />}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes