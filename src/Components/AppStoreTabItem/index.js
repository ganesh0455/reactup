import "./index.css";

const TabItem=(props)=>{
    const {tabItem,updateTabItem}=props;
    const {tabId,displayName}=tabItem;
    // console.log(tabItem);

    const sendTabId=()=>{
        updateTabItem(tabId);
    }

    return(
        <div className="tab-items-pot">
            <button className="tab-item-button" type="button" onClick={sendTabId}>{displayName}</button>
        </div>
    )
}

export default TabItem;