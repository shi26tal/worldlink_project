import { Route, Routes } from "react-router";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import MyPlanPage from "../pages/MyPlanPage";
import RouterSettingPage from "../pages/RouterSettingPage";
import BillsPaymentPage from "../pages/BillsPaymentPage";
import SupportPage from "../pages/Support-Page/SupportPage";
import ReferPage from "../pages/ReferPage";
import Benefits from "../pages/Benefits";
import OfferPage from "../pages/OfferPage";
import LocationShiftPage from "../pages/Support-Page/LocationShiftPage";
import ProfilePage from "../pages/ProfilePage";
import NewConnectionPage from "../pages/Support-Page/NewConnectionPage";
import ReportProblemPage from "../pages/Support-Page/ReportProblemPage";
import EmployeeVerificationPage from "../pages/EmployeeVerificationPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import NotificationPage from "../pages/NotificationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="employee-verification" element={<EmployeeVerificationPage />}></Route>
        <Route path="change-password" element={<ChangePasswordPage />}></Route>
        <Route path="notification" element={<NotificationPage />}></Route>
        <Route path="refer" element={<ReferPage />}></Route>
        <Route path="my-plan" element={<MyPlanPage />} />
        <Route path="router-settings" element={<RouterSettingPage />} />
        <Route path="bills-and-payments" element={<BillsPaymentPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="support/location-shift" element={<LocationShiftPage />} />
        <Route path="support/new-connection" element={<NewConnectionPage />} />
        <Route path="support/report-problem" element={<ReportProblemPage />} />
        <Route path="benefits" element={<Benefits />}></Route>
        <Route path="offers" element={<OfferPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
