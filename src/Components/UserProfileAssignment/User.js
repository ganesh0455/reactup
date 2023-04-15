import { Component } from "react";
import UserListPractice from ".";

class CreacteSingleUser extends Component {



  render() {
    // console.log("props=",this.props);
    const {SingleUserDetails}=this.props;
    // console.log(SingleUserDetails);
    const {imageUrl,name,role}=SingleUserDetails;
    return (
      <li className="user-card-cotainer">
        <img
          src={imageUrl}
          className="avathar"
          alt="avathar"
        />
        <div className="user-details-container">
          <h1 className="user-name">{name}</h1>
          <p className="user-designation">{role}</p>
        </div>
        <button className="delete-button" >
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="cross"
            className="delete-img"
          />
        </button>
      </li>
    );
  }
}

export default CreacteSingleUser;
