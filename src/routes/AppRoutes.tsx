import { Route, Routes } from "react-router"
import AppLayout from "../layouts/AppLayout"
import HomePage from "../pages/HomePage"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes