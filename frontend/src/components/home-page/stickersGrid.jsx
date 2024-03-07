// Ici on veut afficher la grille qui contiendra les stickers, soit les mini fiches produit
import data from "../../../../bouchon-data.json"

import Sticker from "./sticker.jsx"
import "./sticker.css"

function StickersGrid() {
    return (
        <div id="stickers-grid">
            <Sticker product={data.products[0]}  />
            <Sticker product={data.products[1]}  />
            <Sticker product={data.products[2]}  />
           
        </div>
    )
}



export default StickersGrid