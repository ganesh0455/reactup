// import React from 'react';
import { Component } from "react";
import CreacteSingleUser from "./User";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Tester",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const SingleUser = {
  uniqueNo: 1,
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Esther Howard",
  role: "Software Developer",
};

// const props={
//   SingleUserDetails:{
//     uniqueNo: 1,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//     name: "Esther Howard",
//     role: "Software Developer",
//   }
// }

// const {SingleUserDetails}=props;

class UserListPractice extends Component {

  state={
    searchInput:""
  }

  onChangeSearchInput=(event)=>{
    this.setState({searchInput:event.target.value});
  }

  render() {
    const {searchInput}=this.state;
    return(
        <>
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            {initialUserDetailsList.map((eachUser)=>{
              return <CreacteSingleUser SingleUserDetails={eachUser} key={eachUser.uniqueNo}/>
            })}
        </>
    )
  }
}

export default UserListPractice;
