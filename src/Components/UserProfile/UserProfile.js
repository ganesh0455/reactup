import "./index.css";

const UserProfile=(props)=>{
    const {userDetailsList,deleteUser}=props;
    const {imageUrl,name,role,uniqueNo}=userDetailsList;

    const onDelete=()=>{
        deleteUser(uniqueNo);
    }

    return(
        <li className="user-card-cotainer">
            <img src={imageUrl} className="avathar" alt="avathar"/>
            <div className="user-details-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-designation">{role}</p>
            </div>
            <button className="delete-button" onClick={onDelete}>
                <img 
                    src="https://assets.ccbp.in/frontend/react-js/cross-img.png" 
                    alt="cross" 
                    className="delete-img"
                />
            </button>
        </li>
    )
}

export default UserProfile;