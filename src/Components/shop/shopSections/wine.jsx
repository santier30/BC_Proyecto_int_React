import img1 from '../../img/Antologia-XXXVIII--38--Doble-MagnumBIG.webp'
import img2 from '../../img/Dominio-ChardonnayBIG.webp'
import img3 from '../../img/Estuche-Rutini-Extra-BrutBIG.webp'
import img4 from '../../img/Trumpeter-MalbecBIG.webp'
import img5 from '../../img/Trumpeter-Reserve-BlendBIG.webp'
import img6 from '../../img/Trumpeter-Reserve-Rose-de-MalbecBIG.webp'
import CartContext from '../../cart/CartContext'
import { useContext } from 'react';
const wineImages = {
  '../../img/Antologia-XXXVIII--38--Doble-MagnumBIG.webp': img1,
  '../../img/Dominio-ChardonnayBIG.webp': img2,
  '../../img/Estuche-Rutini-Extra-BrutBIG.webp': img3,
  '../../img/Trumpeter-MalbecBIG.webp': img4,
  '../../img/Trumpeter-Reserve-BlendBIG.webp': img5,
  '../../img/Trumpeter-Reserve-Rose-de-MalbecBIG.webp': img6,
};
const Wine = ({wine})=>{
  let image = wineImages[wine.image]!==undefined?wineImages[wine.image]: wine.image;


  const ctx = useContext(CartContext)

const Add = ()=>{
ctx.onAdd( wine.name,image, wine.price)
}
    return(
    <div className="wine_div">
            <img className="wine_img" src={image} alt={ wine.name} />
            <div className="wine_buttons">
              <div className="wine_buttons-container">
                <button className="buy-link" >
                  <i className="fas fa-dollar-sign"></i>
                 $ Buy
                </button>
                <button className="buy-link" onClick={Add} >
                  <i className="fa fa-shopping-cart"></i>
                  Add to Cart
                </button>
              </div>
              <p>{ wine.short_description}</p>
            </div>
            <h2>{ wine.name} ({ wine.stock})</h2>
            <h2>${ wine.price}</h2>
          </div>
    )
}
export default Wine