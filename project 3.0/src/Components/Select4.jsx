function Select4({value , onChange}){
    return(
    <select className="pt-2 pb-2" onChange={onChange} value={value}>
      <option value="500g">500g</option>
      <option value="1kg">1kg</option>
  </select>
    )
  }

  export default Select4;