
import {
    Menu, MenuButton, MenuList, MenuItem, Flex, Box,
} from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineStar } from 'react-icons/ai';
import { BsFillBasketFill } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "../css/baveriges.css"
import { fetchData, getSingleProduct } from '../Redux/action';
import { addItemsToCart } from '../Redux/cart/action';
//import { addProductCart } from '../Redux/cart/action';
import { FilterComponents } from './filterComponent';
export const Beverage = () => {
    const products = useSelector((store) => store.ecommerceData.products)
    const currentProd = useSelector((store) => store.cartData.cartItems)
    const [id, setId] = useState("")
    const [pro, setPro] = useState([])
    //    console.log("dfg",currentProd)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())

    }, [])

    const getSingleBeforePost = (id) => {
        axios.get(`http://localhost:7005/softdrink/${id}`).then(({ data }) => {
            setPro(data)
            console.log("item", data)
            dispatch(addItemsToCart(data))
        })
    }
    //  console.log(pro)
    // const postSingle = (pro) => {
    //     axios({
    //         url:"http://localhost:7005/addtocart",
    //         method:"POST",
    //         body:{
    //             pro
    //         }
    //     }).then((res)=>{
    //              dispatch 
    //     })
    // }

    const handleAddToCart = (item) => {
        //  console.log("pro", item)
        setId(item._id)
        getSingleBeforePost(item._id)
        //  dispatch(addProductCart(item))
        //  dispatch(addProductCart(pro))

    }

    const handleDetail = (id) => {
        dispatch(getSingleProduct(id))
    }
    return (
        <div>
            <div id='Products'>
                <div id='categ'>
                    <div id='filter'>
                        <div>
                            <div id='p3'>
                                <div id='p1'>
                                    Categories
                                </div><hr />
                                <p id='p2'>Beverages</p>
                                <p id="p2">Energy & Soft Drinks (52)</p>
                            </div>
                        </div>
                        <div><FilterComponents /></div>
                    </div>

                </div>
                <div id='k23'>
                    <div id='Drink_popularity'>
                        <div id='div1'>Soft Drinks(52)</div>
                        <div>
                            <Menu>
                                <MenuButton border={"1px solid black"}
                                    padding={"5px"} width={"200px"} id='blackArro'>
                                    <Flex justifyContent={"space-between"} lineHeight={"10px"} >
                                        <Box>Popularity</Box> <Box><AiOutlineDown /></Box>
                                    </Flex>
                                </MenuButton>

                                <MenuList>
                                    <MenuItem>Price High to low</MenuItem>
                                    <MenuItem>price Low to High</MenuItem>
                                    <MenuItem>Alphabetical</MenuItem>

                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                    <div id='cart'>
                        <div id='cart2'>
                            <div id='icon2'><GrDeliver /></div>
                            <div>ALL PRODUCTS</div>
                        </div>
                    </div><hr />
                    <div id='map_data'>  {products.map((item) => (
                        <div key={item._id}>
                            <Link to={`./${item._id}`} >
                                <img src={item.imgUrl} onClick={() => handleDetail(item._id)} />
                            </Link>
                            <div id='prod_detail'>
                                <p id='p11'>{item.company}</p>
                                <p id='p112'>{item.title}</p>
                                <div id='map4'>
                                    <div id='star'>
                                        <div>
                                            {item.star}
                                        </div>
                                        <div id='starS'>
                                            {<AiOutlineStar />}
                                        </div>
                                    </div>
                                    <div >{item.rating} Ratings</div>
                                </div>
                                <p>{item.size} ml</p>
                                <p>Rs {item.price} </p>
                            </div>
                            <div id='btntop'>
                                <div><button onClick={() => handleAddToCart(item)} id='btn'>ADD</button></div>
                                <div> <BsFillBasketFill /></div>

                            </div>
                        </div>
                    ))}  </div>
                </div>
            </div>
        </div>
    )
}