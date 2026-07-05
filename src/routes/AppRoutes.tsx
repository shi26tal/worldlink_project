import { Route, Routes } from "react-router"
import AppLayout from "../layouts/AppLayout"
import HomePage from "../pages/HomePage"
import MyPlanPage from "../pages/MyPlanPage"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="my-plan" element={<MyPlanPage />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes