import "./index.css";
import { Link } from "react-router-dom";
import ProductCardDetails from "../ProductCardDetails";

const ProductCard = (props) => {
    // console.log("props=",props);
  const { productData,addCartItem } = props;
  const { id,title, brand, imageUrl, rating, price } = productData;

  return (
    <Link className="blog-item-link" to={`/Product/${id}`} >
        <li className="product-item">
            <img src={imageUrl} alt="product" className="thumbnail" />
            <h1 className="title">{title}</h1>
            <p className="brand">by {brand}</p>
            <div className="product-details">
                <p className="price">Rs {price}/-</p>
                <div className="rating-container">
                    <p className="rating">{rating}</p>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        alt="star"
                        className="star"
                    />
                </div>
            </div>
        </li>
    </Link>
  );
};
export default ProductCard;