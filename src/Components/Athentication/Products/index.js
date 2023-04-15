import ProductCard from "../Products Card";
import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css"
import Header from "../Header";

class Products extends Component {

    state={
        productList:[],
        cartList:[]
    }

    getProducts=async ()=>{
        const apiUrl="https://apis.ccbp.in/products";
        const jwtToken=Cookies.get("jwt_token");
        const options={
            headers:{
                Authorization:`Bearer ${jwtToken}`
            },
            method:'GET'
        }
        const response=await fetch(apiUrl,options);
        // console.log("Res=",response);
        if(response.ok===true){
            const fetchedData=await response.json();
            // console.log("Fete=",fetchedData);
            const updatedData=fetchedData.products.map((product)=>({
                title:product.title,
                brand:product.brand,
                price:product.price,
                id:product.id,
                imageUrl:product.image_url,
                rating:product.rating,
            }))
            this.setState({
                productList:updatedData
            })
        }
    }

    addCartItem=(productData)=>{
        console.log(productData);
        const {cartList}=this.state;
        console.log("-------------------------triggered------------------------");
        const {imageUrl,title,brand,price}=productData;
        const newCartItem={
            imageUrl: imageUrl,
            title: title,
            brand: brand,
            price: price
        }
        console.log("************************************************",newCartItem,cartList);
        this.setState((prevState)=>({
            cartList:[...prevState.cartList,newCartItem]
        }))
    }

    componentDidMount(){
        this.getProducts();
    }

    render(){
        const {productList}=this.state;
        // console.log(productList);
        return(
            <div className="main-container">
                <Header />
                <div className="all-products-conatiner">
                    <h2>Exclusive Prime Deals</h2>
                </div>
                <div className="all-products-conatiner">
                    <h2>All Products</h2>
                    <ul className="all-product-list">
                        {productList.map((eachProduct)=>{
                            return <ProductCard productData={eachProduct} key={eachProduct.id} addCartItem={this.addCartItem}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Products;