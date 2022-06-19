
import "../css/cart.css"
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,
} from '@chakra-ui/react'
import { useSelector } from "react-redux"
import { deleteItem } from "../Redux/cart/action"
import { useDispatch } from "react-redux"
import { AiOutlineArrowRight } from "react-icons/ai"
import {  useNavigate } from "react-router"

export const Cart = () => {
  const navigate=useNavigate()
    const currentProd = useSelector((store) => store.cartData.cartItems)
    const dispatch = useDispatch()
    let sum = 0
    for (let i = 0; i < currentProd.length; i++) {
        sum += currentProd[i].price
    }
const handleAddress=()=>{
    navigate("/address")
}

    console.log("currentProd", sum)
    return (
        <div id="cartPage">
            <div id="numberCart">Your Basket ({currentProd.length} items)</div><hr />
            <div id="btncart"> <button>VIEW AVAILABLE PROMOS</button></div>
            <div>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr  color={"white"}>
                                <Th>ITEM DESCRIPTION</Th>
                                <Th>UNIT PRICE</Th>
                                <Th>QUANTITY</Th>
                                <Th>SUBTOTAL</Th>
                                <Th bg={"#c6cc74"} isNumeric>SAVINGS</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currentProd.map((item) => (
                                <Tr>
                                    <Td>{item.title}</Td>
                                    <Td>Rs. {(item.price).toFixed(2)}</Td>
                                    <Td>1</Td>
                                    <Td isNumeric>Rs. {(item.price).toFixed(2)} <button onClick={() => { dispatch(deleteItem(item._id)) }} id="btncross">×</button></Td>
                                    <Td isNumeric>Rs. {(item.price * .10).toFixed(2)}</Td>
                                </Tr>
                            ))
                            }

                        </Tbody>

                    </Table>
                </TableContainer>
                <div id="sbto1">
                    <div id="div23" ></div>
                    <div id="subtototal">
                        <div id="d12">
                            <div id="f23">Subtotal</div>
                            <div id="f23">Rs.{sum}.00</div>
                        </div>
                        <div className="delivery" id="d12">
                            <div id="f23">Delivery Charges </div>
                            <div id="f23">--</div>
                        </div>
                        <div id="d12">
                            <div id="total">TOTAL </div>
                            <div id="total" >Rs.{sum}.00</div>
                        </div>
                        <p id="f23" className="delivery"> For this order: Accepted food coupon is Rs. {sum}.00</p><hr />
                        <div id="cheeeckout">
                            <button onClick={handleAddress}>CHECKOUT</button>
                            <AiOutlineArrowRight id="sym" />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}