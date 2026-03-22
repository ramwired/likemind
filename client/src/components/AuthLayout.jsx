import { Outlet } from "react-router-dom"
import Logo from "./Logo"

const AuthLayout = () => {
  return (
    <div>
        <Logo/>
        <Outlet/>
    </div>
  )
}

export default AuthLayout
