import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router";


// const getDataDelete=()=>{
//   console.log("hello")
//   axios({
//     url: "http://localhost:7005/addtocart",
//     method: "DELETE"
//   }).then((res) => {
//    <Navigate to={"/"} replace={true}/>
//   })
// }

export default async function displayRazorpay(sum,getDataDelete) {
  const data = await fetch(`https://bigbaskets.herokuapp.com/razorpay?price=${sum}`, {
    method: "POST",
  }).then((t) => t.json())
  //console.log(data);


  const options = {
    key: "rzp_test_XmZRCQRG4zhL6B",
    currency: data.currency,
    amount: data.amount,
    name: "Big Basket",
    description: "Wallet Transaction",
    image: "https://bigbaskets.herokuapp.com/logo",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id)
        getDataDelete()
    },
    prefill: {
      name: "BigBasket",
      email: "sumitnarwal@gmail.com",
      contact: "9467810223",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  
}




