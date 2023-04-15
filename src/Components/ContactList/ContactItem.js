// import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
// 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
const ContactItem=(props)=>{
  const {contactItem,toggleFavourate}=props;
  const {id,name,mobileNo,isFavorite}=contactItem;
  
  const isFavoriteContact=isFavorite ?
      'https://assets.ccbp.in/frontend/react-js/star-filled-img.png' :
      'https://assets.ccbp.in/frontend/react-js/star-outline-img.png';

  const onClickFavorite=()=>{
    toggleFavourate(id);
    if(isFavorite===true){
      toast.success(`Contact ${name} is now Favourite`);
    }
    else{
      toast.error(`Contact ${name} is now not Favourite`);
    }
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavorite}
        >
          <img src={isFavoriteContact} className="favorite-icon" alt="star" />
        </button>
      </div>
      <ToastContainer />
    </li>
  );
}

export default ContactItem;
