function Footer(){
    return(
        <>
         <hr  style={{border:"1.5px solid", marginBottom:"30px"}}></hr>

<footer className='d-md-flex d-flex flex-column flex-wrap flex-md-row flex-md-nowrap gap-4 ps-4 pe-3'>
  <div>
    <a href="#">
      <img src="/images/Pintola_Logo_PNG_400x.avif" alt="Pintola Logo" className='logo2 logo' />
    </a>
    <div className='d-flex gap-2'>
      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
      <a href="#"><i className="fa-brands fa-youtube"></i></a>
      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
    </div>
  </div>
  <div>
    <h5>Shop</h5>
    <a href=""><p>All product</p></a>
    <a href=""><p>Natural Peanut Butter</p></a>
    <a href=""><p>Premium Nut Butters</p></a>
    <a href=""><p>High Protein &</p></a>
    <a href=""><p>Performance Butter</p></a>
    <a href=""><p>Certified Organic Products</p></a>
    <a href=""><p>Nuts & seeds</p></a>
    <a href=""><p>Rice Cakes</p></a>
    <a href=""><p>High Protein Breakfast </p></a>
    <a href=""><p>Cereals </p></a>
  </div>
  <div>
    <h5>Pintola</h5>
    <a href=""><p>About Us</p></a>
    <a href=""><p>Recipes</p></a>
    <a href=""><p>Why Pintola?</p></a>
    <a href=""><p>Privacy Policy</p></a>
    <a href=""><p>Terms of Service</p></a>
    <a href=""><p>FAQs</p></a>
    <a href=""><p>Refund & Cancellation</p></a>
    <a href=""><p>Policy</p></a>
    <a href=""><p>Shipping Policy </p></a>
    <a href=""><p>Return Order </p></a>
  </div>
  <div>
    <h5>Stay with us!</h5>
    <input type="email" placeholder='Email'></input>
    <button>Sign up</button>
  </div>
  <div>
    <h5 style={{ marginBottom: "15px" }}>Download Product Catalogue</h5>
    <button>Sign up</button>
  </div>
</footer>
        </>
    )
}

export default Footer