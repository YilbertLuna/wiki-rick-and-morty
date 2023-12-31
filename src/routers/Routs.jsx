import { Routes, Route } from "react-router-dom";
import { Character } from "../components/pages/Character";
import { Location } from "../components/pages/Location";
import { Episode } from "../components/pages/Episode";
import { NotFound } from "../components/pages/Notfound";
import { CharacterInfo } from "../components/pages/CharacterInfo";

function Routs() {


    return(
        <header>
            <Routes>
                <Route path="/" element={<Character/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/episode" element={<Episode/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/character/:CharacterId" element={<CharacterInfo/>}/>
            </Routes>
        </header>
    )
}

export { Routs }