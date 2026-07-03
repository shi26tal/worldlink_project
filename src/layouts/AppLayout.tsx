import { Outlet } from "react-router"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


const AppLayout = () => {
  return (
    <div>
        <Header />

        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout