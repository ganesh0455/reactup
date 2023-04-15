import { Component } from "react";
import Header from "../Header";
import LandingSection from "../LandingSection";
import FeaturesSection from "../FeaturesSection";


class WMain extends Component {
  state = {
    activeLanguage: "EN",
  };
  changeLanguage=activeLanguage=>{
    this.setState({activeLanguage:activeLanguage})
  }
  render() {
    const {activeLanguage}=this.state;
    return (
      <>
        <Header activeLanguage={activeLanguage} changeLanguage={this.changeLanguage}/>
        <LandingSection activeLanguage={activeLanguage}/>
        <FeaturesSection activeLanguage={activeLanguage}/>
      </>
    );
  }
}

export default WMain;
