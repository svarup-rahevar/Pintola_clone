import React from "react";
import CartCard from "./CartCard";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const { cart, setCart} = useCart();

  function increment(id) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  }

  function decrement(id) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  function removeItem(id) {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }

  return (
    <>
    <div className="cartContainer d-flex flex-column align-item-center">
      <Link to="/" className="text-blue-600 backlink"><span>&lt;</span>Back to Products</Link>
      {cart.length === 0 ? (
        <p className="p-0 mt-3">Your cart is empty !</p>
      ) : (
        <>
          <h4 className="mt-2 pt-0 text-start cart-header">Shopping Cart</h4>
          <table className="cartTable" >
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th className="total">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="img">
                      <CartCard image={item.img}/>
                    </td>
                    <td style={{textAlign:"left"}}>
                     <span className="title" style={{fontSize:"17px",width:"10px",fontWeight:"450"}}>{item.title}</span>
                     <p style={{position:"relative",top:"30px"}}>Variant/Size: {item.selectedValue}</p>
                    </td>
                    <td style={{display:"block"}}>
                      ₹<span>{item.newPrice}</span>
                      <br></br>
                      <span><del className="text-secondary">₹{item.oldPrice}</del></span>
                    </td>
                    
                    <td className="buttons">
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                      <button type="button" onClick={() => increment(item.id)}>+</button>
                      <span> {item.quantity || 1} </span>
                      <button type="button" onClick={() => decrement(item.id)}>-</button>
                      </div>
                    </td>
                  
                    <td  className="position-relative">₹<span>{item.newPrice * (item.quantity || 1)}</span><span className="removeBtn"><button onClick={() => removeItem(item.id)}>x</button></span></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{backgroundColor:"rgba(240, 238, 243, 0.85)"}}>
                <td></td>
                <td></td>
                <td></td>
                <td className={`totalheader ${cart.length === 0 ? "cartfoot" : ""}`}><h4>Subtotal:</h4></td>
                <td className="varient"></td>
                <td className={`total ${cart.length === 0 ? "cartfoot" : ""}`}>₹<span>{cart.reduce((total, item) => total + item.newPrice * (item.quantity || 1), 0)}</span></td>
              </tr>
            </tfoot>
          </table>
        </>
        
      )}
<div className="cartTable2">
  {cart.map((item) => (
    <div key={item.id} style={{marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px"}} className="main2">
      <div className="img2 me-3">
        <CartCard image={item.img}/>
      </div>
      
      <div style={{textAlign:"left",position:"relative",width:"100%"}}>
        <span className="title" style={{fontSize:"16px",fontWeight:"450",width:"10px"}}>{item.title}</span>
        <p style={{position:"relative",top:"30px",fontSize:"14px"}}>Variant/Size: {item.selectedValue}</p>
        <p style={{lineHeight:"1",fontSize:"15px",marginTop:"40px"}}><span>₹{item.newPrice}</span><br></br>
           <del className="text-secondary">₹{item.oldPrice}</del></p>
        <div className="buttons">
          <button type="button" onClick={() => increment(item.id)}>+</button>
          <span style={{fontSize:"17px"} }  > {item.quantity || 1} </span>
          <button type="button" onClick={() => decrement(item.id)}>-</button>
        </div>
        <span className="removeBtn"><button onClick={() => removeItem(item.id)}>x</button></span>
       
      </div>
    </div>
  ))}
</div>
    </div>
    <Footer/>
     <p className='chatInfo me-3'>
     <a href=""><span><i className="fa-brands fa-whatsapp"></i></span>&nbsp;
       chat with us</a>
   </p>
 
   </>
  );
};

export default Cart;