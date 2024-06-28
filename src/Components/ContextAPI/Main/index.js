import {Component} from 'react'

// import Header from './components/Header'
import Header from '../Header'
import LandingSection from '../LandingSection'
import FeaturesSection from '../FeaturesSection'

import LanguageContext from '../../../context/LanguageContext'

// import './App.css'

class Main extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageContext.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageContext.Provider>
    )
  }
}

export default Main