import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const MainLayout = () => {
  return (
    <div className=" min-w-screen min-h-screen bg-slate-300">
      <Sidebar/>
      <div className="ml-[250px] min-h-[vh]">
        <Header />
        <div className="p-4">
          <div className="pt-[85px]">
            <Outlet/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default MainLayout
