function Select3({value , onChange}){
    return(
    <select className="pt-2 pb-2" onChange={onChange} value={value}>
      <option value="Unsalted">Unsalted</option>
      <option value="Salted">Salted</option>
      <option value="Multigrain">Multigrain</option>
      <option value="Multigarin Salted">Multigarin Salted </option>
  </select>
    )
  }

  export default Select3;