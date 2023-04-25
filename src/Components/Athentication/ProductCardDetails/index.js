import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import Header from "../Header";

class ProductCardDetails extends Component {

    state = {
        productData: {},
        similarProductsData: [],
        quantity:1,
        totalPrice:0
    };

    getFormattedData = (data) => ({
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
    });



    getProductDetails = async () => {
        console.log(this.props);
        const { match } = this.props;
        const { params } = match;
        const { id } = params;

        const jwtToken = Cookies.get("jwt_token");
        const apiUrl = `https://apis.ccbp.in/products/${id}`;
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: "GET",
        };
        const response = await fetch(apiUrl, options);
        // console.log(response);
        if (response.ok) {
            const fetchedData = await response.json();
            // console.log(fetchedData);
            const updatedData = this.getFormattedData(fetchedData);
            // console.log(updatedData);
            const updatedSimilarProductsData = fetchedData.similar_products.map(
                (eachSimilarProduct) => this.getFormattedData(eachSimilarProduct)
            );
            this.setState({
                productData: updatedData,
                similarProductsData: updatedSimilarProductsData,
            });
        }
    }

    componentDidMount() {
        this.getProductDetails();
    }

    onCLickAddtoCart=()=>{
        // const {productData} = this.state;
        // console.log(productData);
        
       
        // const {addCartItem}=this.props;
        // console.log(this.props);
        // addCartItem(productData)
    }

    onDecrement=()=>{
        const {quantity,totalPrice,productData}=this.state;
        if(quantity>=1){
            this.setState(prevState=>{
                return ({quantity:prevState.quantity-1,totalPrice:totalPrice-productData.price})
            })
        }
    }

    onIncrement=()=>{
        const {totalPrice,productData}=this.state;
        this.setState(prevState=>{
            return ({quantity:prevState.quantity+1,totalPrice:totalPrice+productData.price})
        })
    }

    onClickClearAllItems=()=>{
        this.setState(prevState=>{
            return ({quantity:1,totalPrice:0})
        })
    }

    render() {
        const { productData,quantity,similarProductsData,cartList,totalPrice } = this.state;
        const { availability, brand, description, id, price, rating, title, totalReviews, imageUrl } = productData;
        // console.log(cartList);
        return (
            <div className="product-details-success-view">
                <Header />
                <div className="product-details-container">
                    <img src={imageUrl} alt="product" className="product-image" />
                    <div className="product">
                        <h1 className="product-name">{title}</h1>
                        <p className="price-details">Rs {price}/-</p>
                        <div className="rating-and-reviews-count">
                            <div className="rating-container">
                                <p className="rating">{rating}</p>
                                <img
                                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                                    alt="star"
                                    className="star"
                                />
                            </div>
                            <p className="reviews-count">{totalReviews} Reviews</p>
                        </div>
                        <p className="product-description">{description}</p>
                        <div className="label-value-container">
                            <p className="label">Available:</p>
                            <p className="value">{availability}</p>
                        </div>
                        <div className="label-value-container">
                            <p className="label">Brand:</p>
                            <p className="value">{brand}</p>
                        </div>
                        <hr className="horizontal-line" />
                        <div className="counter-items">
                            <button className="count-btn" onClick={this.onDecrement}>-</button>
                            <p className="qty">{quantity}</p>
                            <button className="count-btn" onClick={this.onIncrement}>+</button>
                            <p className="total-price">Total :{totalPrice}</p>
                            <button onClick={this.onClickClearAllItems} className="Clear-btn">Clear all Items</button>
                        </div>
                        <button className="add-to-cart-btn" onClick={this.onCLickAddtoCart}>Add to Cart</button>
                    </div>
                </div>
                <h1 className="similar-products-heading">Similar Products</h1>
            </div>
        );
    }
}

export default ProductCardDetails;