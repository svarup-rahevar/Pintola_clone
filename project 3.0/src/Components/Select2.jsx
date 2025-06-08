function Select2({value , onChange}){
    return(
    <select className="pt-2 pb-2" onChange={onChange} value={value}>
      <option value="400g">400g</option>
      <option value="1Kg">1Kg</option>
  </select>
    )
  }

  export default Select2;