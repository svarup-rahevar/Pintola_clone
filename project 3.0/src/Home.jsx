import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Card, Select1, Select2, Select3, Select4, ImgVid, NavigationBar } from "./Components";

const products = [
  { id: 1, img: "/images/card5.webp", title: "High Protein Dark Chocolate Outs", newPrice: 288, oldPrice: 349, offer: "17% off", SelectComponent: Select2,defaultValue: "400g"},
  { id: 2, img: "/images/card6.webp", title: "High Protein Organic Jaggery Peanut Butter", newPrice: 337, oldPrice: 375, offer: "10% off", SelectComponent: Select1, defaultValue: "Crunchy/510Kg" },
  { id: 3, img: "/images/card7.webp", title: "High Protein Dark Chocolate & Cranberry Muesli", newPrice: 299, oldPrice: 365, offer: "18% off", SelectComponent: Select2,defaultValue: "400g" },  
  { id: 4, img: "/images/card8.webp", title: "Premium Organic Chia Seeds", newPrice: 175, oldPrice: 199, offer: "12% off", SelectComponent: Select1,defaultValue: "Crunchy/510Kg" },
  { id: 5, img: "/images/card9.webp", title: "All Natural Organic Peanut Butter", newPrice: 179, oldPrice: 125, offer: "4% off", SelectComponent: Select2,defaultValue: "400g" },
  { id: 6, img: "/images/card10.webp", title: "Jumbo Rolled Oats", newPrice: 119, oldPrice: 125, SelectComponent: Select2, offer: "4% off" },
  { id: 7, img: "/images/card11.webp", title: "Dark Chocolate Almond Butter", newPrice: 275, oldPrice: 299, offer: "17% off", SelectComponent: Select2,defaultValue: "400g" },
  { id: 8, img: "/images/card12.webp", title: "Organic Quinoa", newPrice: 165, oldPrice: 199, offer: "12% off", SelectComponent: Select4,defaultValue: "500g" },
  { id: 9, img: "/images/card13.webp", title: "Premium Flax Seeds", newPrice: 109, oldPrice: 125, offer: "12% off",SelectComponent: Select3 },
  { id: 10, img: "/images/card14.webp", title: "Organic Jaggery Powder", newPrice: 309, SelectComponent: Select2,defaultValue: "400g" }
];

const products2 = [
  { id: 1, img: "/images/card7.webp", title: "High Protein Dark Chocolate & Cranberry Muesli", newPrice: 299, oldPrice: 365, offer: "18% off", SelectComponent: Select2,defaultValue: "400g" },
  { id: 2, img: "/images/card10.webp", title: "Jumbo Rolled Oats", newPrice: 119, oldPrice: 125, SelectComponent: Select2, offer: "4% off",defaultValue: "400g" },
  { id: 3, img: "/images/card6.webp", title: "High Protein Organic Jaggery Peanut Butter", newPrice: 337, oldPrice: 375, offer: "10% off", SelectComponent: Select1,defaultValue: "Crunchy/510Kg" },
  { id: 4, img: "/images/card13.webp", title: "Premium Flax Seeds", newPrice: 109, oldPrice: 125, offer: "12% off",SelectComponent: Select3 ,defaultValue: "Unsalted" },
];

function Home() {
  const [count, setCount] = useState(0);
  const [show, setToggle] = useState(false);

  function toggle() {
    setToggle(!show);
  }

  return (
    <>
      {/* <NavigationBar/> */}

      <div id="demo" className="carousel slide carousel1" data-bs-ride="carousel" data-bs-interval="8000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner1.webp" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
            
          </div>
          <div className="carousel-item">
            <img src="/images/banner2.webp" alt="Chicago" className="d-block" style={{ width: "100%" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="text-dark"><i className="fa-solid fa-arrow-left"></i></span>
        </button>
        <button className="carousel-control-next " type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="text-dark"><i className="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>

      <h4 className='heading pt-5 pt-md-4 mt-5 mt-md-5'>Shop our Best Sellers</h4>
      <div className="carditems">
        {products2.map((product) => (
          <div key={product.id}>
            <Card
              id={product.id} 
              img={product.img}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              offer={product.offer}
              SelectComponent={product.SelectComponent}
              defaultValue={product.defaultValue}
            />
          </div>
        ))}
      </div>

      <h4 className='heading2'>Newly Launched</h4>

      <div className="carditems2">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              id={product.id} 
              img={product.img}
              title={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              offer={product.offer}
              SelectComponent={product.SelectComponent}
              defaultValue={product.defaultValue}
            />
          </div>
        ))}
      </div>

      <h4 className='heading2'>Recent Blogs</h4>
      <h4 className='m-3'>Follow Us On Instagram @Pintola.in</h4>
      <div className='imgs'>
        <ImgVid image={"/images/img1.jpg"} />
        <ImgVid image={"/images/img2.jpg"} />
        <ImgVid image={"/images/img3.jpg"} />
        <ImgVid image={"/images/img4.jpg"} />
        <ImgVid image={"/images/img5.jpg"} />
        <ImgVid image={"/images/img6.jpg"} />
        <ImgVid image={"/images/img7.jpg"} />
        <ImgVid image={"/images/img8.jpg"} />
        <ImgVid image={"/images/img9.jpg"} />
        <ImgVid image={"/images/img10.jpg"} />
        <ImgVid image={"/images/img11.jpg"} />
        <ImgVid image={"/images/img12.jpg"} />
      </div>

      <hr  style={{border:"1.5px solid "}}></hr>

      <footer className='d-md-flex d-flex flex-column flex-wrap flex-md-row flex-md-nowrap gap-4 ps-4'>
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
          <h5>Pintola</h5>
          <input type="email" placeholder='Email'></input>
          <button>Sign up</button>
        </div>
        <div>
          <h5 style={{ marginBottom: "15px" }}>Download Product Catalogue</h5>
          <button>Sign up</button>
        </div>
      </footer>
      <p className='chatInfo'>
        <a href=""><span><i className="fa-brands fa-whatsapp"></i></span><span className='text' >&nbsp;
          chat with us</span></a>
      </p>
    </>
  );
}

export default Home;