import { Route, Routes } from "react-router-dom"
import { Beverage } from "../pages/Bevrages"
import { LandingPage } from "../pages/landingPage"
import { Navbar } from "../pages/navbar"
export const AllRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Beverages" element={<Beverage />} />
            </Routes>
        </div>
    )



}