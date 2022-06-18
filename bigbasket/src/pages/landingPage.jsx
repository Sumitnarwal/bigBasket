
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../css/landing.css"
import { CoverPiclanding4 } from "./cover4"
import { CoverPiclanding3 } from "./coverlanding3"
import { CoverPicTop } from "./coverPageTop1"
import { CoverPic } from "./CoverPic"
import { Navbar } from "./navbar"
import { VegSeller } from "./slid.vegLand"
import { BestSeller } from "./sliding"

export const LandingPage = () => {
   
    return (
        <div>
            <div id="main">
           {    
            // <div id="navbar" >
            //     <Navbar/>
            //     </div>
                }
                <div id="sliding_Window">
                    <CoverPicTop />
                </div>
                <div id="below_slid_start">
                    <div id="l1">
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250522.png"></img>
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250522.png"></img>
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_neu-pass-topstrip_m_250622_02.png"></img>
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250622_03.png"></img>
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_buy-more-save-more-topstrip_m_250622_04.png"></img>
                        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250522.png"></img>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">My Smart Basket</p>
                            <button id="lb1">View All</button>
                        </div>
                        <div id="l5">
                        {  
                     <VegSeller/>
                        }
                        </div>
                    </div>
                    <div id="slide_sec">
                        <CoverPic />
                    </div>
                    <div id="la7">
                        <p id="l8">Bank Offers</p>
                        <div id="imgl7">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_paytm_360_070622.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_indus_360_070622.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_rbl_360_070622.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_dbs_360_070622.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Best Sellers</p>
                            <button id="lb1">Show More</button>
                        </div>
                        <div id="l5">
                           {
                           <BestSeller/>
                            }
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Most Popular</p>
                        </div>
                        <div id="imgl7">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_mangos-mostpopularStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_deos-mostpopularStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_sunmer-specil-mostpopularStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_ayurveda-store-mostpopularStorefront_m_480_250522_04.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Top Offers</p>
                        </div>
                        <div id="imgl7">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_deals-of-the-week-topoffersStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_big-packs-topoffersStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_combos-topoffersStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_the%20-30cron-topoffersStorefront_m_480_250522_04.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Fruits and Vegetables</p>
                        </div>
                        <div id="img9">
                            <div><img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_orgain-fnv-fnvStorefront_m_250522_560x378_01.jpg" /></div>
                            <div id="lp8">
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_fruits-fnvStorefront_m_250522_275x184_02.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_veggs-fnvStorefront_m_250522_275x184_03.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_cut-fnvStorefront_m_250522_275x184_04.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_exotic-fnvStorefront_m_250522_275x184_05.jpg" />

                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Your Daily Staples</p>
                        </div>
                        <div id="l11">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_blended-cooking-oil-staplesStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_rice-bran-oils-staplesStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_cooking-pasta-staplesStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_herbs-seasoning-staplesStorefront_m_480_250522_04.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_powder-spices-staplesStorefront_m_480_250522_05.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_blended-masala-staplesStorefront_m_480_250522_06.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Beverages</p>
                        </div>
                        <Link to="/Beverages">
                            <div id="img9">
                                <div><img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_soft-deinks-beveragesStorefront_m_250522_560x378_01.jpg" /></div>
                                <div id="lp8">
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_juices-beveragesStorefront_m_250522_02.jpg" />
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_coconut-water-beveragesStorefront_m_250522_03.jpg" />
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_energy-drinks-beveragesStorefront_m_250522_04.jpg" />
                                    <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_syrups-beveragesStorefront_m_250522_05.jpg" />

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Snacks Store</p>
                        </div>
                        <div id="imgl7">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_namkeens-snacksStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_frozen-snacksStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_soups-snacksStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_biscuits-snacksStorefront_m_480_250522_04.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Cleaning & Household
                            </p>
                        </div>
                        <div id="imgl7">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_cleaner-disinfectants-cleaningStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_detegents-cleaningStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_kitchen-wips-cleaningStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_fresheners-cleaningStorefront_m_480_250522_04.jpg" />
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Beauty and Hygiene</p>
                        </div>
                        <div id="img9">
                            <div><img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_lips-beautyStorefront_m_250522_560x378_01.jpg" /></div>
                            <div id="lp8">
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_deos-beautyStorefront_m_250522_275x184_02.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_serum-beautyStorefront_m_250522_275x184_03.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_bb,cc,creams-beautyStorefront_m_250522_275x184_04.jpg" />
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_eye-makeup-beautyStorefront_m_250522_275x184_05.jpg" />

                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Home and Kitchen</p>
                        </div>
                        <div id="l11">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_under-99_m_110622_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_100-199_m_110622_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_glassware_m_110622_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_container_m_110622_04.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_brooms_m_110622_05.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_leds_m_110622_06.jpg" />
                        </div>
                    </div>
                    <div>
                        <CoverPiclanding3 />
                    </div>
                    <div>
                        <div id="l4">
                            <p id="l2">Brand Store</p>
                        </div>
                        <div id="l11">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_amul-brandStorefront_m_480_250522_01.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_dettol-brandStorefront_m_480_250522_02.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_coco-cola-brandStorefront_m_480_250522_03.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_loreal-brandStorefront_m_480_250522_04.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_india-gate-brandStorefront_m_480_250522_05.jpg" />
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_durex-brandStorefront_m_480_250522_06.jpg" />
                        </div>
                    </div>
                    <div>
                        <CoverPiclanding4 />
                    </div>
                </div>
            </div>

        </div>
    )
}