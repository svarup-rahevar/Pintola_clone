import Footer from "../Footer";
import RecipeCard from "./RecipesCard";

function Recipes() {
  return (
    <>
      <h4 className="recipe-header">Healthy & Delicious Recipes</h4>
      <div className="recipe-items">
        <RecipeCard 
          img={"/images/recipe1.webp"} 
          title={"Oats and Cashew Butter Modak"} 
          link={"/Recipes/Recipe1"}
        />
        <RecipeCard 
          img={"/images/recipe2.webp"} 
          title={"Dark Chocolate Peanut Butter Burfi"} 
          link={"/Recipes/Recipe2"}
        />
        <RecipeCard 
          img={"/images/recipe3.webp"} 
          title={"Coconut Jaggery Pitha"} 
          link={"/Recipes/Recipe3"}
        />
        <RecipeCard 
          img={"/images/Recipe4.webp"} 
          title={"Peanut Butter Jaggery Sandesh"}
          link={"/Recipes/Recipe4"}
        />
        <RecipeCard 
          img={"/images/recipe5.webp"} 
          title={"Almond Butter Badam Pak"} 
          link={"/Recipes/Recipe5"}
        />
        <RecipeCard 
          img={"/images/recipe6.webp"} 
          title={"Dark Chocolate Peanut Butter Truffles"}
          link={"/Recipes/Recipe6"} 
        />
        <RecipeCard 
          img={"/images/recipe7.webp"} 
          title={"Oats Apple Halwa"} 
          link={"/Recipes/Recipe7"}

        />
        <RecipeCard 
          img={"/images/recipe8.webp"} 
          title={"Almond Butter Coconut Laddoos"} 
          link={"/Recipes/Recipe8"}
        />
        <RecipeCard 
          img={"/images/recipe9.webp"}
          title={"Cashew Butter Fruit and Nut Balls"} 
          link={"/Recipes/Recipe9"}
        />
      </div>
      <Footer></Footer>
      <p className='chatInfo'>
        <a href=""><span><i className="fa-brands fa-whatsapp"></i></span><span className='text' >&nbsp;
          chat with us</span></a>
      </p>
    </>
  );
}

export default Recipes;