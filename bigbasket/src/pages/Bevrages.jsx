
import {
    MenuItem, Flex, Box, Input, IconButton, Text
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup, Stack, Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, MenuDivider, Button } from '@chakra-ui/react'
import axios from 'axios';
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineStar } from 'react-icons/ai';
import { BsFillBasketFill } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Select } from '@chakra-ui/react'
import "../css/baveriges.css"
import { fetchData, getSingleProduct } from '../Redux/action';
import { addItemsToCart, addProductCart } from '../Redux/cart/action';
//import { addProductCart } from '../Redux/cart/action';
//import { FilterComponents } from './filterComponent';


export const Beverage = () => {

    let products = useSelector((store) => store.ecommerceData.products)
    const currentProd = useSelector((store) => store.cartData.cartItems)
    const [id, setId] = useState("")
    const [pro, setPro] = useState([])
    const [orderShort, setOrder] = useState("")
    //    console.log("dfg",currentProd)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    ///////////////////////////////////////////////


    const [searchParams, setSearchParams] = useSearchParams();

    const [brandValue, setBrandValue] = useState(
        searchParams.getAll("brand") || []
    );
    const [packSize, setPackSize] = useState(
        searchParams.getAll("quantity") || []
    );
    const [priceValue, setPriceValue] = useState(
        searchParams.getAll("price") || []
    );
    const [orderValue, setOrderValue] = useState(
        searchParams.getAll("_order") || []
    );

    const handleSelect = (e) => {
        // console.log("eee", e.target.value)
        setOrder(e.target.value)
        if (orderShort === "asc") {

            products.sort((a, b) => a.price - b.price)
        }
        else if (orderShort === "desc") {

            products.sort((a, b) => b.price - a.price)
        }

        else if (orderShort === "aa") {
            products.title.sort()
        }
    }
    const brandValueHandler = (v) => {
        setBrandValue(v)
    }
    useEffect(() => {
        setSearchParams(
            {
                brand: brandValue,
                quantity: packSize,
                price: priceValue,
                _order: orderValue,
            },
            { replace: true }
        );
        const params = {
            brand: searchParams.getAll("brand"),
            quantity: searchParams.getAll("quantity"),
            price: searchParams.getAll("price"),
            _sort: "price",
            _order: searchParams.get("_order"),
        };
        dispatch(fetchData(params));
    }, [
        setSearchParams,
        searchParams,
        brandValue,
        priceValue,
        orderValue,
        packSize,
    ]);
    /////////////////////////////////////////


    const handleAddToCart = (item) => {
        //  console.log("pro", item)
        setId(item._id)
        //   getSingleBeforePost(item._id)
        dispatch(addProductCart(item))
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
                        <div>
                            {

                                // <FilterComponents />
                            }
                            <Box>
                                <Box display={{ base: "none", md: "block" }} >

                                    <Text borderBottom={"2px solid green"} width={"60px"}>Brand</Text>
                                    <CheckboxGroup colorScheme='green' >
                                        <Stack alignItems={"baseline"} >
                                            <Flex>
                                                <Input marginTop={"5px "} border={"2px solid black"} placeholder="search By brand" />
                                                <IconButton
                                                    colorScheme='blue'
                                                    backgroundColor={"white"}
                                                    marginTop={"5px "}
                                                    aria-label='Search database'
                                                    icon={<SearchIcon fontSize={"20px"} width={"30px"} height={"40px"} border={"1px solid rgb(213, 191, 191"} color={"black"} borderLeft={"1px solid white"}
                                                        marginLeft={"-14px"}

                                                    />}
                                                />
                                            </Flex>
                                            <CheckboxGroup
                                                defaultValue={brandValue}
                                                onChange={brandValueHandler}
                                            >
                                                <Checkbox value="7 Up">7 Up</Checkbox>
                                                <Checkbox value="Appy">Appy</Checkbox>
                                                <Checkbox value='Appy Fizz'>Appy Fizz</Checkbox>
                                                <Checkbox value='Bisleri'>Bisleri</Checkbox>
                                                <Checkbox value='Coca Cola'>Coca Cola </Checkbox>
                                                <Checkbox value='Fanta'>Fanta </Checkbox>
                                                <Checkbox value='Limca'>Limca </Checkbox>
                                                <Checkbox value='Pepsi'>Pepasi </Checkbox>
                                                <Checkbox value='Sprite'>Sprite </Checkbox>
                                            </CheckboxGroup>
                                            <Box borderBottom={"2px solid green"} >Price</Box><hr />
                                            <Checkbox value="">Less than Rs 20 </Checkbox>
                                            <Checkbox value="">Rs 21 to Rs 50  </Checkbox>
                                            <Checkbox value="">Rs 51 to Rs 100  </Checkbox>
                                            <Checkbox value="">Rs 101 to Rs 200  </Checkbox>
                                            <Checkbox value="">Rs 201 to Rs 500  </Checkbox>
                                            <Checkbox value="">More than Rs 500  </Checkbox>

                                            <Box borderBottom={"2px solid green"}>Pack Size</Box><hr />
                                            <Checkbox value="">50  ml</Checkbox>
                                            <Checkbox value="">100 ml</Checkbox>
                                            <Checkbox value="">250 ml </Checkbox>
                                            <Checkbox value="">500 ml  </Checkbox>
                                            <Checkbox value="">1000 ml  </Checkbox>
                                            <Checkbox value="">1.25 l  </Checkbox>

                                            <Box borderBottom={"2px solid green"}>Flavours </Box><hr />
                                            <Checkbox value="">Cola</Checkbox>
                                            <Checkbox value="">Orange</Checkbox>
                                            <Checkbox value="">Leman</Checkbox>
                                            <Checkbox value="">Others </Checkbox>


                                        </Stack>
                                    </CheckboxGroup>
                                </Box>
                                <Box display={{ base: "block", md: "none" }} p="0 rem 2 rem">
                                    <Menu closeOnSelect={false}>
                                        <MenuButton as={Button} colorScheme='blue'>
                                            MenuItem
                                        </MenuButton>
                                        <MenuList minWidth='240px'>
                                            <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                                                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                                                <MenuItemOption value='desc'>Descending</MenuItemOption>
                                            </MenuOptionGroup>
                                            <MenuDivider />
                                            <MenuOptionGroup title='Country' type='checkbox'>
                                                <MenuItemOption value='email'>Email</MenuItemOption>
                                                <MenuItemOption value='phone'>Phone</MenuItemOption>
                                                <MenuItemOption value='country'>Country</MenuItemOption>
                                            </MenuOptionGroup>
                                        </MenuList>
                                    </Menu>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
                <div id='k23'>
                    <div id='Drink_popularity'>
                        <div id='div1'>Soft Drinks(52)</div>
                        <div>

                            <Select onChange={handleSelect} placeholder='Popularity'>
                                <option value='desc'>Price-high to Low</option>
                                <option value='asc'>Price-low to high</option>
                                <option value='aa'>Alphabetical</option>
                            </Select>
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