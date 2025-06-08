import { useState } from "react";

function Select1({value , onChange}){

    return(
    <select className="pt-2 pb-2" onChange={onChange} value={value}>
      <option value="crunchy/510gm">Crunchy/510gm</option>
      <option value="Crunchy/1Kg">Crunchy/1Kg</option>
      <option value="Creamy/510gm">Creamy/510gm</option>
      <option value="Creamy/1kg">Creamy/1kg</option>
   </select>
    )
  }

  export default Select1;