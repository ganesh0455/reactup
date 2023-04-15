import { Route,Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute=(props)=>{
    // console.log(props);
    const jwtToken=Cookies.get('jwt_token');
    // console.log(jwtToken);
    if(jwtToken===undefined){
        return <Redirect to="/Login" />
    }
    return <Route {...props}/>
}

export default ProtectedRoute;