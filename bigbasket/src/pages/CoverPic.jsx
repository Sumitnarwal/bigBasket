import { useState, useEffect, useRef } from "react";


var covers = [
    "https://www.bigbasket.com/media/uploads/banner_images/cp_pbs_entrypoint_1130x400_060622.jpg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_hardinsasta_bangalore_400_130622.jpeg",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250522_400-250522.jpg",
    
];

export const CoverPic = () => {
    const [image, setImage] = useState(0);
    const timeoutRef = useRef(null);


    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setImage((prevIndex) => prevIndex === covers.length - 1 ? 0 : prevIndex + 1)
        }, 2500)
        return () => {
            resetTimeout()
        }
    }, [image])

    return (
        <div>
            {
                <img src={covers[image]} alt="" />
            }
        </div>
    )
}