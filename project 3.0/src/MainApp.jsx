import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import NavigationBar from "./Components/Navigation";
import AboutUs from "./Components/About us"; 
import WhyPintola from "./Components/WhyPintola";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext"; 
import Recipes from "./Components/recipes/Recipes";
import { Recipe1,Recipe2,Recipe3,Recipe4,Recipe5,Recipe6,Recipe7,Recipe8,Recipe9 } from "./Components/recipes/recipeDetail/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationBar />
        <Home />
      </>
    ),
  },
  {
    path: "/Cart",
    element: (
      <>
        <NavigationBar />
        <Cart />
      </>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <>
        <NavigationBar />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/WhyPintola",
    element: (
      <>
        <NavigationBar />
        <WhyPintola />
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        <NavigationBar />
        <Contact />
      </>
    ),
  },
  {
    path: "/Recipes",
    element: (
      <>
        <NavigationBar />
        <Recipes/>
      </>
    ),
  },
  {
    path: "/Recipes/Recipe1",
    element: (
      <>
        <NavigationBar />
        <Recipe1 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe2",
    element: (
      <>
        <NavigationBar />
        <Recipe2 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe3",
    element: (
      <>
        <NavigationBar />
        <Recipe3 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe4",
    element: (
      <>
        <NavigationBar />
        <Recipe4 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe5",
    element: (
      <>
        <NavigationBar />
        <Recipe5 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe6",
    element: (
      <>
        <NavigationBar />
        <Recipe6 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe7",
    element: (
      <>
        <NavigationBar />
        <Recipe7 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe8",
    element: (
      <>
        <NavigationBar />
        <Recipe8 />
      </>
    ),
  },
  {
    path: "/Recipes/Recipe9",
    element: (
      <>
        <NavigationBar />
        <Recipe9 />
      </>
    ),
  },
]);

function MainApp() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default MainApp;