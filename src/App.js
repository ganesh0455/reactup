import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Notfound from './Components/Notfound/Notfound';
import Counter from './Components/Counter';
import FinalUserProfile from './Components/UserProfile';
import FinalClock from './Components/Clock';
import BlogList from './Components/BlogList';
import BlogItemDetails from './Components/BlogItemDetails';
import ProjectItemDetails from './Components/ProjectItemDetails';
import ContactList from './Components/ContactList';
import AppStore from './Components/AppStore';
import FlexBox from './Components/FlexBox';
import AthenticationCart from './Components/Athentication/Cart';
// import AthenticationHeader from './Components/Athentication/Header';
import AthenticationHome from './Components/Athentication/Home';
import AthenticationLogin from './Components/Athentication/LoginForm';
import AthenticationProduct from './Components/Athentication/Products';
import Main from './Components/ContextAPI/Main';
import WMain from './Components/WithoutRedux/Main';
// import CreacteSingleUser from './Components/UserProfileAssignment/User';
import UserListPractice from './Components/UserProfileAssignment';
import ProtectedRoute from './Components/Athentication/ProtectedRoute';
import ProductCardDetails from './Components/Athentication/ProductCardDetails';
import ContactListPractice from './Components/Contacts Practice';
import CommentsApp from './Components/Comments App';
import HelloName from './Components/FunctionalComponents/Hello';

const App=()=>( 
    <BrowserRouter>
      <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Counter" component={Counter} />
            <Route exact path="/UserProfile" component={FinalUserProfile} />
            <Route exact path="/Clock" component={FinalClock} />
            <Route exact path="/BlogList" component={BlogList} />
            <Route exact path="/blogs/:id" component={BlogItemDetails} />
            <Route exact path="/ProjectItems" component={ProjectItemDetails} />
            <Route exact path="/ContactList" component={ContactList} />
            <Route exact path="/AppStore" component={AppStore} />
            <Route exact path="/FlexBox" component={FlexBox} />
            <Route exact path="/WithRedux" component={Main} />
            <Route exact path="/WithoutRedux" component={WMain} />
            <Route exact path="/PractUserProfileMain" component={UserListPractice} />
            <Route exact path="/Login" component={AthenticationLogin} />
            <ProtectedRoute  exact path="/AthenticationHome" component={AthenticationHome}/>
            <ProtectedRoute exact path="/Cart" component={AthenticationCart} />
            <ProtectedRoute exact path="/Products" component={AthenticationProduct} />
            <ProtectedRoute exact path="/Product/:id" component={ProductCardDetails} />
            <Route exact path="/ContactPractice" component={ContactListPractice} />
            <Route exact path="/CommentsApp" component={CommentsApp} />
            <Route exct path="/FName" component={HelloName} />
            <Route exact component={Notfound} />
          </Switch>
    </BrowserRouter>
)

export default App;
