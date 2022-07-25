
import { Route, Routes } from "react-router-dom"
import { Beverage } from "../pages/Bevrages"

//import { Navbar } from "../pages/navbar"
import { ProductDetail } from "../pages/singleProductDetail"
import { Cart } from "./cart"
import { Checkout } from "./addres-checkout"
//import { Login } from "./Login"
import { Payment } from "./payment"
import {Home}  from "./Home/Home"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"
import { useState } from "react"
import { LandingPage } from "../pages/landingPage"

export const AllRoutes = () => {
    const [user, setLoginUser] = useState({});
  const [googleAuthUser , setgoogleAuthUser] = useState({});
    return (
        <div>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Beverages" element={<Beverage />} />
                <Route path="/cart" element={<Cart />} />
            { //   <Route path="/login" element={<Login />} />
        }

                <Route path="/address" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Beverages/:id" element={<ProductDetail />} />
                
                 {
                    //////////////////////////////////
                 }

                 <Route
                 path="/"
                 element={
                   user && user._id || googleAuthUser&&googleAuthUser.email ? (
                     <Home user={user} setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser} googleAuthUser={googleAuthUser}/>
                   ) : (
                     <Login setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser} />
                   )
                 }
               ></Route>
               <Route
                 path="/login"
                 element={<Login setLoginUser={setLoginUser} setgoogleAuthUser={setgoogleAuthUser}/>}
               ></Route>
               <Route path="/register" element={<Register />}></Route>





            </Routes>
        </div>
    )
}




