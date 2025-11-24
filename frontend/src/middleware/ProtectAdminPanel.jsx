import { Navigate, Outlet } from "react-router-dom"

const ProtectAdminPanel = () => {

const userInfo = {
    name : "Shahadat Hossain Shamim",
    role : "admin"
}

if(userInfo){
    return <Outlet/>
}else{
    return <Navigate to='/login' />
}

 
}

export default ProtectAdminPanel
