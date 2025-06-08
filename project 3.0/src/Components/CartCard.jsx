import React from "react";

function CartCard({image,title,varient,size}){
    return(
        <>
        <div className="Card cartcard">
            <img src={image}></img>
            <div className="card-body">
                <h3 className="card-title" >{title}</h3>
                <p className="card-text" >{varient}</p>
                <p className="card-text" >{size}</p>
            </div>
        </div>
        </>
    )
}

export default CartCard