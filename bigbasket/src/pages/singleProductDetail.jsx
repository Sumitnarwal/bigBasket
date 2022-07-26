import { AiOutlineStar } from "react-icons/ai"
import { RiTruckLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { useDispatch } from 'react-redux';

import "../css/singlePro.css"
import {  addsingleProductCart } from "../Redux/cart/action";
import { addProductCart } from "../Redux/cart2/action";
export const ProductDetail = () => {
    const id = useSelector((store) => store.ecommerceData.id)
    const { pid } = useParams()
    const dispatch = useDispatch()
    //  console.log("pid", id)
    // const handleAddToCart = () => {
    //     console.log("pid", id._id)
    //     dispatch(addsingleProductCart(id._id))
    // }

    const handleAddToCart=()=>{
        dispatch(addProductCart(id))
    }
    return (
        <div id="prodDetail">
            <div id="left">
                <div id="cat">Category </div><hr />
                <p>Beverages</p>
                <p>Energy & Soft Drinks</p>
                <p>Cold Drinks</p>
                <p>Icetea, Non Aerated Drink</p>
                <p>Non Alcoholic Drinks</p>
                <p>Soda & Cocktail Mix</p>
                <p>Sports & Energy Drinks</p>
                <div id="cat12">Brands</div><hr />
                <p>Pepsi</p>
                <p>Pepsi Cold Drinks</p>
            </div>
            <div id="imgd">
                <img src={id.imgUrl} />
            </div>
            <div id="div3">
                <p id="k1">{id.company}</p>
                <p id="k2">{id.title}</p>
                <p id="p2">MRP. {Math.floor(id.price * 1.1)}</p>
                <p>Price : Rs {id.price}</p>
                <p id="k11">(Inclusive of all taxes)</p>
                <p>You Save 10%</p>

                <div id='map4'>
                    <div id='star'>
                        <div>
                            {id.star}
                        </div>
                        <div id='starS'>
                            {<AiOutlineStar />}
                        </div>
                    </div>
                    <div >{id.rating} Ratings</div>
                </div>
                <div id="btn1">
                    <input placeholder="1" /> <button onClick={handleAddToCart}>ADD TO BASKET</button> <button id="btt23">SAVE</button>
                </div>
                <div id="cartDate1">
                    <div id="cartDate" ><RiTruckLine /></div>
                    <div id="cart3">Standard: 25 Jun, 9:00AM - 1:30PM</div>
                </div>
            </div>
        </div>
    )
}