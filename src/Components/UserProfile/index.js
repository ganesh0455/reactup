import UserProfile from "./UserProfile";
import "./index.css";
import { Component } from "react";

// const userDetailsList={
//     imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
//     name:"Chethu",
//     role:"Software Engineer"
// }

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Tester'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

class FinalUserProfile extends Component {

  state = {
    searchInput: "",
    userDetailsList: initialUserDetailsList
  }

  onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    this.setState({
      searchInput: event.target.value
    })
  }

  onDeleteUser = (UniqueNumber) => {
    const { userDetailsList } = this.state
    const filteredUserData = userDetailsList.filter((user) =>
      user.uniqueNo !== UniqueNumber
    )
    this.setState({
      userDetailsList: filteredUserData
    })
  }

  render() {
    const { searchInput, userDetailsList } = this.state;
    const searchResults = userDetailsList.filter((eachUser) =>
      eachUser.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    return (
      <div className="list-container">
        <h1 className="title">User List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul>
          {/* <UserProfile userDetailsList={userDetailsList[0]} />
              <UserProfile userDetailsList={userDetailsList[1]} />
              <UserProfile userDetailsList={userDetailsList[2]} />
              <UserProfile userDetailsList={userDetailsList[3]} /> */
            searchResults.map((eachUser) => (
              <UserProfile userDetailsList={eachUser} key={eachUser.uniqueNo} deleteUser={this.onDeleteUser} />
            ))

          }
        </ul>
      </div>
    )
  }
}
export default FinalUserProfile;

