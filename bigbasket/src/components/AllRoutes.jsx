
import { Route, Routes } from "react-router-dom"
import { Beverage } from "../pages/Bevrages"
import { LandingPage } from "../pages/landingPage"
import { Navbar } from "../pages/navbar"
import { ProductDetail } from "../pages/singleProductDetail"
import { Cart } from "./cart"
import { Checkout } from "./checkout"
import { Login } from "./Login"
import { Payment } from "./payment"


export const AllRoutes = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Beverages" element={<Beverage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
               
                <Route path="/address" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Beverages/:id" element={<ProductDetail />} />
                
            </Routes>
        </div>
    )
}

