import "./index.css"

const TabItem=(props)=>{
    const {tabDetails,updateActiveTabId,isActive}=props;
    const {displayText,tabId}=tabDetails;
    console.log(tabDetails);

    const onClickTab=()=>{
        updateActiveTabId(tabId);
    }

    const activeTabClassName=isActive ? "active-tab-btn-true" : "active-tab-btn-false";
    return(
        <li className="tab-item-container">
            <button type="button" onClick={onClickTab} className={activeTabClassName}>
                {displayText}
            </button>
        </li>
    )
}

export default TabItem;