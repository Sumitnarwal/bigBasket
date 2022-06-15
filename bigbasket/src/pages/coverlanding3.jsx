import { useState, useEffect,useRef} from "react";


var covers = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250522_400-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250522_400-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250522_400-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250522_400-250522.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250522_400-250522.jpg",

  
];

export const CoverPiclanding3 = () => {
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