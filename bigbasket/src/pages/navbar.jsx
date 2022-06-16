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
    Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Button, Box,
} from '@chakra-ui/react'
export const Navbar = () => {
    return (
        <div>
            <div id="navbar" >
                <div id="navbar_top">
                    <div id="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xLI-jeYNyexq-hI1HvabWAM0rvpS2ubJbQ&usqp=CAU" alt="logo" />
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
                                <div>
                                    BigBasketeeer
                                </div>
                                <div>
                                    <AiOutlineDown />
                                </div>
                            </div>
                        </div>
                        <div id="basket_search">
                            <div id="input_search">
                                <input placeholder="Search for Products..." />
                                <div ><HiOutlineSearch /></div>
                            </div>
                            <div id="cart">
                                <div id="cart_logo"><BsFillBasketFill /></div>
                                <div id="cart_count">My Basket  1 items</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="MenuItem">
                   
                        <Menu bg={"black"} >
                            <MenuButton as={Button} >
                                SHOP BY CATEGORY <AiOutlineDown />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>FRUITS & Vegetables</MenuItem>
                                <MenuItem>Foodgrains,Oil & Dairy</MenuItem>
                                <MenuItem>Backery Cakes & Dairy</MenuItem>
                                <MenuItem>Bevarages</MenuItem>
                                <MenuItem>Snacks & Branded Foods</MenuItem>
                                <MenuItem>Beauty & Hygiene</MenuItem>
                                <MenuItem>Cleaning & Household</MenuItem>
                                <MenuItem>Eggs,Meat & Fish</MenuItem>
                                <MenuItem>Gourment & World Food</MenuItem>
                                <MenuItem>Baby Care</MenuItem>
                                <MenuItem>View All</MenuItem>
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