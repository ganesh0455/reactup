import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import "./index.css"

const Header=(props)=>{

    // console.log(props);
    const {history}=props;
    const onLogout=()=>{
        
        Cookies.remove("jwt_token");
        history.replace("/Login");
    }

    const onClickProduct=()=>{
        history.replace("/Products");
    }

    const onClickCart=()=>{
        history.replace("/Cart");
    }

    return(
        <div className="header-container">
            <button onClick={onClickProduct}>Products</button>
            <button onClick={onClickCart}>Cart</button>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    )
}

export default withRouter(Header);