import axios from "axios";
import { useEffect } from "react";

// const getData = () => {
//   axios({
//       url: "https://bgbskt.herokuapp.com/addtocart",
//       method: "DELETE"
//   }).then((res) => {
//       //setCartp(res.data)
//       console.log(res)
//   })
// }


export default async function displayRazorpay(sum) {
    const data = await fetch(`http://localhost:1337/razorpay?price=${sum}`, {
      method: "POST",
    }).then((t) => t.json())
  
    console.log(data);
  

  //   useEffect(() => {
  //     getData()
  // }, [a,handleDelteteFcart])
  


    const options = {
      key: "rzp_test_XmZRCQRG4zhL6B",
      currency: data.currency,
      amount: data.amount,
      name: "Divash Upadhyay",
      description: "Wallet Transaction",
      image: "http://localhost:1337/logo",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: "Divash Upadhyay",
        email: "dishuupadhyay507@gmail.com",
        contact: "9560916993",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  