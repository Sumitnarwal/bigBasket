import { useSelector } from "react-redux"



import "../css/checkoutAdd.css"


export const AddressShow = () => {
    const address = useSelector((store) => store.ecommerceData.address)
    console.log("address", address.Mobile)
    return (
        <div id="add_list">
            <div id="add_list1">
                <div>Name : {address.Name}</div>
                <div>Mobile No. : {address.Mobile}</div>
                <div>address : {address.Hno}- {address.Adress}</div>
                <div>City : {address.City}</div>
                <div>Pin no : {address.Pin}</div>

            </div>

        </div>
    )
} 