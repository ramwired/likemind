import { Outlet } from "react-router-dom"
import LandingNavbar from "./LandingNavbar"


const MarketingLayout = () => {
  return (
    <div>
        <LandingNavbar/>
        <Outlet/>
    </div>
  )
}

export default MarketingLayout
