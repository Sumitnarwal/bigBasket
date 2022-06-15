import { useState, useEffect,useRef} from "react";


var covers = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_mango-9691_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/recipe/w-l/4272_2_1.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_kesar_cxnp-9689_400_090622.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_c_chees_cxnp-9690_400_090622.jpg",
  "",
  
];

export const CoverPiclanding4 = () => {
        const [image, setImage] = useState(0);
        const timeoutRef = useRef(null);
       

        function resetTimeout() {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }
        useEffect(() => {
            resetTimeout();
            timeoutRef.current  = setTimeout(() => {
                setImage((prevIndex)=>prevIndex ===covers.length-1? 0: prevIndex+1)
            }, 2500)
            return ()=>{
                resetTimeout()
            }
        }, [image])

    return (
        <div>
            {
                <img className="slide" src={covers[image]} alt="" />
            }
        </div>
    )
}