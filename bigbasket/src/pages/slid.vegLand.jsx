

import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import "../css/baveriges.css"
import {  getSingleProductveg } from '../Redux/action';
export const VegSeller = () => {
    const [drink, setDrink] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        //   getVeg(),
        getdrink()
    }, [])
    const getdrink = () => {
        axios({
            url: "https://bigbaskets.herokuapp.com/veg",
            method: "GET",
            params: {
                _limit: 5
            }

        }).then((item) => {
            setDrink(item.data)
        }).catch((e) => {
            console.log(e.message)
        })
    }
    const handleDetail = (id) => {
        dispatch(getSingleProductveg(id))
    }
    return (
        <div id='map_top'>  {drink?.map((item) => (
            <div id="fk2" key={item._id}>
                <Link to={`./Beverages/${item._id}`} >
                    <img src={item.imgUrl} onClick={() => handleDetail(item._id)} />
                </Link>
                <div id='prod_detail44'>

                    <p id='p112'>{item.title}</p>
                    
                    <p>{item.size} ml</p>
                    <p>Rs {item.price} </p>
                </div>

            </div>
        ))}  </div>
    )
}