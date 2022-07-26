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
import { useDispatch, useSelector } from "react-redux"
import { Login } from "../components/Login"
//import { Login } from "../components/Login/Login"
import axios from "axios"
import { useEffect, useState } from "react"
import { delelteProdCart } from "../Redux/cart/action"
import { fetchCart } from "../Redux/cart2/action"
export const Navbar = () => {
    const [cartp, setCartp] = useState([])
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const cartlength = useSelector((store) => store.cartData.cart)
    const username = useSelector((store) => store.ecommerceData.username)
console.log("username",username)
    const navigate = useNavigate()
    // useEffect(() => {
    //     getData()
    // }, [])
    //////////////////////////

    const handleDebounce = (e) => {
        setInput(e.target.value)
    }
    //console.log(input)
    let time
    const debounce = (fun, delay) => {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            fun()
        }, delay)
    }
    async function debounceFun() {
        const data = await Search()
        // console.log(data)
    }
    async function Search() {
        try {
            const searchText = input

            const data = await fetch(`https://api.unsplash.com/search/photos?per_page=28&query=${searchText}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`)
            const res = await data.json();
            return res.results
        } catch (error) {
            console.log(error)
        }
    }

    ////////////////////////
    useEffect(() => {
        if (cartlength?.length === 0) {
            dispatch(fetchCart())
        }
    }, [dispatch, cartlength?.length])
    // const getData = () => {
    //     axios({
    //         url: "https://bgbskt.herokuapp.com/addtocart",
    //         method: "GET"
    //     }).then((res) => {
    //         setCartp(res.data)
    //     })
    // }
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
                            <div id="k23t" >
                                <div><CgProfile />
                                </div>
                                <div id="k23btn">
                                    <button id="btnnav" onClick={() => navigate("/Register")}>{username?username:"sigin/Login"}</button>
                                </div>
                                <div>
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div id="basket_search">
                            <div id="input_search">
                                <input onInput={debounce(debounceFun, 3000)} onChange={handleDebounce} placeholder="Search for Products..." />
                                <div id="mpk2" ><HiOutlineSearch /></div>
                            </div>
                            <div id="cart">
                                <div id="cart_logo"><BsFillBasketFill /></div>
                                <Link to={"/cart"}>
                                    <div id="cart_count">My Basket
                                        <p>{cartlength?.length ? cartlength.length : 0} items</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="MenuItem">
                    <Menu bg={"black"}  >
                        <MenuButton id="catagory" bg={"green"} as={Button} >
                            SHOP BY CATEGORY <AiOutlineDown />
                        </MenuButton>
                        <MenuList width={"105%"} border={"1px solid rgb(228, 217, 217)"}>
                            <Flex>
                                <Box border={"1px solid rgb(191, 173, 173) "}>
                                    <Link to={"/Beverages"}>
                                        <MenuItem border={"1px solid rgb(228, 217, 217)"} id="slideDown">Bevarages</MenuItem>
                                    </Link>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"} >FRUITS & Vegetables</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Foodgrains,Oil & Dairy</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Backery Cakes & Dairy</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Snacks & Branded Foods</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Beauty & Hygiene</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Cleaning & Household</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Eggs,Meat & Fish</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Gourment & World Food</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Baby Care</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>View All</MenuItem>
                                </Box>
                                <Box>

                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>FRUITS & Vegetables</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Beauty & Hygiene</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Baby Care</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Cleaning & Household</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Bevarages</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Backery Cakes & Dairy</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Gourment & World Food</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Foodgrains,Oil & Dairy</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Snacks & Branded Foods</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>Eggs,Meat & Fish</MenuItem>
                                    <MenuItem border={"1px solid rgb(228, 217, 217)"}>View All</MenuItem>
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