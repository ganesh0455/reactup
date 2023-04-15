import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import TabItem from "../AppStoreTabItem";
import AppItem from "../AppItem";

import "./index.css"

const AppStoreTabItems=[
    {tabId:"social",displayName:"Social"},
    {tabId:"games",displayName:"Games"},
    {tabId:"news",displayName:"News"},
    {tabId:"food",displayName:"Food"},
]

const AppStoreList=[
    {
        id: uuidv4(),
        appName:"FaceBook",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Messenger",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Whatsapp",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Instagram",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Snapchat",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Twitter",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"LinkedIn",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Telegram",
        appType:"social"
    },
    {
        id: uuidv4(),
        appName:"Subway Surfers",
        appType:"games"
    },
    {
        id: uuidv4(),
        appName:"Crossy Roads",
        appType:"games"
    },
    {
        id: uuidv4(),
        appName:"Super Chef",
        appType:"games"
    },
    {
        id: uuidv4(),
        appName:"Temple Run",
        appType:"games"
    },
    {
        id: uuidv4(),
        appName:"Inshorts",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"Way2News",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"Google News",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"FlifBoard",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"Smart News",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"BCC News",
        appType:"news"
    },
    {
        id: uuidv4(),
        appName:"CNN News",
        appType:"news"
    },
    
    {
        id: uuidv4(),
        appName:"Zomato",
        appType:"food"
    },
    {
        id: uuidv4(),
        appName:"Swiggy",
        appType:"food"
    },
    {
        id: uuidv4(),
        appName:"All in One",
        appType:"food"
    },
    {
        id: uuidv4(),
        appName:"DOT",
        appType:"food"
    },
    {
        id: uuidv4(),
        appName:"InstaCart",
        appType:"food"
    }
]


class AppStore extends Component{
    state={
        searchedValue:"",
        activeTabId:AppStoreTabItems[0].tabId,
        appsList:AppStoreList
    }

    onChangeInput=(event)=>{
        this.setState({
            searchedValue:event.target.value
        })
    }

    updateTabItem=(tabId)=>{
        this.setState({
            activeTabId:tabId
        })
    }

    getCorrespondingTabApps=()=>{
        const {activeTabId,searchedValue}=this.state;
        const filteredApps=AppStoreList.filter((eachApp)=>{
            return eachApp.appType===activeTabId && eachApp.appName.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())
        })
        return filteredApps;
    }

    render(){
        const {searchedValue}=this.state;
        const filteredApps=this.getCorrespondingTabApps();
        // console.log(appsList);
        return(
            <div className="store-container">
                <div className="input-search">
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search Apps"
                        onChange={this.onChangeInput}
                        value={searchedValue}
                    />
                    <img className="search-img" src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png" alt="Search"/>
                </div>
                <ul className="tab-items-container">
                    {AppStoreTabItems.map((eachTabItem)=> //here you can have {} and keep return key word
                        <TabItem key={eachTabItem.tabId} tabItem={eachTabItem} updateTabItem={this.updateTabItem}/>
                    )}
                </ul>
                <ul className="app-items-container">
                    {filteredApps.map((eachApp)=>{
                        return <AppItem key={eachApp.id} app={eachApp} />
                    })}
                </ul>
            </div>
        )
    }
}

export default AppStore;