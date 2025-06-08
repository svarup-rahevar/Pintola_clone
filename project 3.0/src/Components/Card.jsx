
import "./ComponantCss.css";
import { useCart } from "./CartContext";
import { useState } from "react";

function Card({ id, img, title, newPrice, oldPrice, SelectComponent, offer, defaultValue }){
  const { cart, setCart } = useCart(); 
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  function onChange(e) {
    setSelectedValue(e.target.value);
  }

  const handleAddToCart = () => {
    const product = {id, img, title, newPrice, oldPrice, offer, selectedValue };
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === id && item.selectedValue === selectedValue);
      if (existingProduct){
        return prevCart.map(item =>
          item.id === id && item.selectedValue === selectedValue
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div className="card">
      <img className="card-img-top" src={img}   alt="Card image"/>
      <span className="badge">{offer}</span>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          ₹{newPrice} <del>{oldPrice}</del>
        </p>
        <form>
          {SelectComponent && <SelectComponent value={selectedValue} onChange={onChange} />}
        </form>
        <button
          className="btn d-block m-auto btn-sm pe-4 ps-4"
          onClick={handleAddToCart}>
          Add to Cart<span><i class="fa-solid fa-cart-plus"></i></span>
        </button>
      </div>
    </div>
  );
}






                                                                                                                                                                 















export default Card;
