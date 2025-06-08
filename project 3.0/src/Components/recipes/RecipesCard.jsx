
import { Link } from "react-router-dom";

function RecipeCard({img,title,link}){
    return(
        <>
        <div className="card recipe-card">
        <img className="card-img-top" src={img} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">1 min read</p>
            <Link to={link} className="btn btn-primary">Read More</Link>
        </div>
        </div>
        </>
    )   
}

export default RecipeCard