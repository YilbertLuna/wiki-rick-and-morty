import { Routes, Route } from "react-router-dom";
import { Character } from "../components/pages/Character";
import { Location } from "../components/pages/Location";
import { Episode } from "../components/pages/Episode";
import { Home } from "../components/pages/Home";
import { NotFound } from "../components/pages/Notfound";

function Routs() {


    return(
        <header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/character" element={<Character/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/episode" element={<Episode/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </header>
    )
}

export { Routs }