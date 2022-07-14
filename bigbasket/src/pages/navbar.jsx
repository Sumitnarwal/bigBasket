import "../css/landing.css"
import { FiPhoneCall } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { GrLocation } from "react-icons/gr"
import { AiOutlineDown } from "react-icons/ai"
import { HiOutlineSearch } from "react-icons/hi"
import { BsFillBasketFill } from "react-icons/bs"
import { MdOutlineLocalOffer } from "react-icons/md"
import { CgHomeScreen } from "react-icons/cg"
import {
    Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Button, Box, Flex,
} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Login } from "../components/Login"
import axios from "axios"
import { useEffect, useState } from "react"
export const Navbar = () => {
    const [cartp, setCartp] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        getData()
    })
    const getData = () => {
        axios({
            url: "http://localhost:7005/addtocart",
            method: "GET"
        }).then((res) => {
            setCartp(res.data)
        })
    }
    const currentProd = useSelector((store) => store.cartData.cartItems)
    return (
        <div>
            <div id="navbar" >
                <div id="navbar_top">
                    <div id="logo">
                        <Link to={"/"}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xLI-jeYNyexq-hI1HvabWAM0rvpS2ubJbQ&usqp=CAU" alt="logo" />
                        </Link>
                    </div>
                    <div id="combine_serach_no">
                        <div id="basket_no">
                            <div id="k2" >
                                <div><FiPhoneCall />
                                </div>
                                <div>
                                    18601231000
                                </div>
                            </div>
                            <div id="k2" >
                                <div><GrLocation />
                                </div>
                                <div>
                                    5600004,Bangalore
                                </div>
                                <div>
                                    <AiOutlineDown />
                                </div>
                            </div>
                            <div id="k2" >
                                <div><CgProfile />
                                </div>
                               {
                                    // <div onClick={()=>navigate("/login")}>
                                    //     Login/signUp
                                    // </div>
                            }
                             <div>
                                 <Login/>
                             </div>
                                <div>
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div id="basket_search">
                        <div id="input_search">
                        <input placeholder="Search for Products..." />
                        <div id="mpk2" ><HiOutlineSearch /></div>
                        </div>
                        <div id="cart">
                        <div id="cart_logo"><BsFillBasketFill /></div>
                        <Link to={"/cart"}>
                                    <div id="cart_count">My Basket
                                        <p>{cartp.length} items</p></div>
                                        </Link>
                                        </div>
                            </div>
                    </div>
                </div>
                <div id="MenuItem">

                    <Menu bg={"black"} >
                        <MenuButton id="catagory" bg={"green"} as={Button} >
                            SHOP BY CATEGORY <AiOutlineDown />
                        </MenuButton>
                        <MenuList width={"580px"} border="1px solid">
                            <Flex>
                                <Box border={"1px solid rgb(191, 173, 173) "}>
                                    <Link to={"/Beverages"}>
                                        <MenuItem>Bevarages</MenuItem>
                                    </Link>
                                    <MenuItem border={"1px solid rgb(191, 173, 173) "}>FRUITS & Vegetables</MenuItem>
                                    <MenuItem>Foodgrains,Oil & Dairy</MenuItem>
                                    <MenuItem>Backery Cakes & Dairy</MenuItem>
                                    <MenuItem>Snacks & Branded Foods</MenuItem>
                                    <MenuItem>Beauty & Hygiene</MenuItem>
                                    <MenuItem>Cleaning & Household</MenuItem>
                                    <MenuItem>Eggs,Meat & Fish</MenuItem>
                                    <MenuItem>Gourment & World Food</MenuItem>
                                    <MenuItem>Baby Care</MenuItem>
                                    <MenuItem>View All</MenuItem>
                                </Box>
                                <Box>

                                    <MenuItem>FRUITS & Vegetables</MenuItem>
                                    <MenuItem>Beauty & Hygiene</MenuItem>
                                    <MenuItem>Baby Care</MenuItem>
                                    <MenuItem>Cleaning & Household</MenuItem>
                                    <MenuItem>Bevarages</MenuItem>
                                    <MenuItem>Backery Cakes & Dairy</MenuItem>
                                    <MenuItem>Gourment & World Food</MenuItem>
                                    <MenuItem>Foodgrains,Oil & Dairy</MenuItem>
                                    <MenuItem>Snacks & Branded Foods</MenuItem>
                                    <MenuItem>Eggs,Meat & Fish</MenuItem>
                                    <MenuItem>View All</MenuItem>
                                </Box>
                            </Flex>
                        </MenuList>
                    </Menu>

                    <div id="offerUdiv">
                        <div id="offer"><MdOutlineLocalOffer /></div>
                        <div id="offerp">OFFERS</div>
                    </div>
                    <div id="offerUdiv">
                        <div id="home"><CgHomeScreen /></div>
                        <div id="">BB SPECIALITY</div>
                    </div>
                </div>
            </div>
        </div>
    )
}