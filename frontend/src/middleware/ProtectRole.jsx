import { Navigate, Outlet } from "react-router-dom"


const ProtectRole = ({ role }) => {
  const userInfo = {
    name : "Shahadat Hossain Shamim",
    role : "Admin"
}

if(userInfo.role === role){
    return <Outlet/>
}else{
    return <Navigate to='/adminPanel/unable-access' />
}
}

export default ProtectRole
