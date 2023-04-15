import {Component} from "react";
import {v4 as uuidv4} from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import ContactItem from "./ContactItem";

const initialContactsList = [
    {
      id: uuidv4(),
      name: 'Ram',
      mobileNo: 9999988888,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      name: 'Pavan',
      mobileNo: 8888866666,
      isFavorite: true,
    },
    {
      id: uuidv4(),
      name: 'Nikhil',
      mobileNo: 9999955555,
      isFavorite: false,
    },
  ]
  

class ContactList extends Component{
    

    state={
        name:'',
        mobileNo:'',
        contactsList:initialContactsList
    }

    onChangeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    onChangeMobileNumber=(event)=>{
        this.setState({
            mobileNo:event.target.value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        console.log("submit");
        const {name,mobileNo}=this.state;
        console.log(mobileNo);

        const newContact={
            id:uuidv4(),
            name,
            mobileNo,
            isFavorite:false
        }
        console.log(newContact);
        if(name!=="" && mobileNo!==""){
            this.setState((prevState)=>({
                name:"",
                mobileNo:"",
                contactsList:[...prevState.contactsList,newContact]
            }))
            toast.success("Contact Added Successfully");
        }
        else{
            // alert("Please enter valid name and  mobile number");
            toast.error("Please fill name and mobile number fields");
        }
    }

    toggleFavourate=(id)=>{
        console.log(id);
        this.setState((prevState)=>({
            contactsList:prevState.contactsList.map((eachContact)=>{
                if(eachContact.id===id){
                    return {...eachContact,isFavorite:!eachContact.isFavorite}
                }
                return eachContact;
            })
        }))
    }


    render(){
        const {name, mobileNo,contactsList} = this.state;
        const array=[1,2,3];
        const hello=array.filter((eachNumber)=>{
            return eachNumber!==2;
        })
        console.log(hello);
        return(
            <div className="app-container">
                <div className="responsive-container">
                    <h1 className="heading">Contacts</h1>
                    <form className="contact-form-container" onSubmit={this.onSubmit}>
                        <input
                            className="input"
                            placeholder="Name"
                            value={name}
                            onChange={this.onChangeName}
                        />
                        <input
                            className="input"
                            placeholder="Mobile Number"
                            value={mobileNo}
                            onChange={this.onChangeMobileNumber}
                        />
                        <button type="submit" className="button">Add Contact</button>
                    </form>
                    <ul className="contacts-table">
                        <li className="table-header">
                            <p className="table-header-cell name-column">Name</p>
                            <hr className="separator" />
                            <p className="table-header-cell">Mobile Number</p>
                        </li>
                        {contactsList.map((eachContact)=>{
                            return <ContactItem contactItem={eachContact} key={eachContact.id} toggleFavourate={this.toggleFavourate}/>
                        })}
                    </ul>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default ContactList;