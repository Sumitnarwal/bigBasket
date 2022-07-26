import { useState, useEffect,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";


var covers = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_bev_coldpressed-juice_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_fnv_season-special_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_140622.jpeg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m__bcd_tasties-origins_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg"
];

export const CoverPicTop = () => {
        const [image, setImage] = useState(0);
        const timeoutRef = useRef(null);
        const navigate=useNavigate()

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

                
                <img onClick={()=>navigate("/Beverages")} className="slide" src={covers[image]} alt="" />
              
            }
        </div>
    )
}