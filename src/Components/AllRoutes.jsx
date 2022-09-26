import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Kuttynav from "./inclusivity"
import Signup from "./Signup"
import Loginup from "./Loginup"
import Why from "./WhyAyoa"

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Sign" element={<Signup />} />
            <Route path="/Includ" element={<Kuttynav/>}/>
            <Route path="/login" element={<Loginup/>}/>
            <Route path="/why" element={<Why/>}/>
        </Routes>
    )
    }