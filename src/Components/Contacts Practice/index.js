import { Component } from "react";
import SingleContact from "./SingleContact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const intialContactList=[
    {
        uniqueNo:1,
        name:"Kavitha",
        mobileNumber:1234
    },
    {
        uniqueNo:2,
        name:"Ganesh",
        mobileNumber:5698
    }
]
class ContactListPractice extends Component {
    state={
        contactList:intialContactList,
        name:"",
        mobileNumber:""
    }

    onChangeName=(event)=>{
        this.setState({name:event.target.value})
    }

    onChangeMobileNumber=(event)=>{
        this.setState({mobileNumber:event.target.value})
    }

    onSubmitData=(event)=>{
        event.preventDefault();
        const {name,mobileNumber,contactList}=this.state;
        const contactsLength=contactList.length+1;
        const userDetails={uniqueNo:contactsLength,name:name,mobileNumber}
        const updatedDetails=[...contactList,userDetails];
        this.setState({
            contactList:updatedDetails,
            name:"",
            mobileNumber:""
        });
        toast.success("Contact Added Successfully");
        // console.log(typeof(mobileNumber),mobileNumber);
    }

    render(){
        const {contactList,name,mobileNumber}=this.state
        return(
            <div>
                <form onSubmit={this.onSubmitData}>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={name}
                        onChange={this.onChangeName}
                    />
                    <input 
                        type="text" 
                        placeholder="Mobile No"
                        value={mobileNumber}
                        onChange={this.onChangeMobileNumber}
                    />
                    <button type="submit">Submit</button>
                </form>
                <br></br>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>MobileNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList.map((eachContact)=>{
                            return <SingleContact contactDetails={eachContact} key={eachContact.uniqueNo}/>
                        })}
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        )
    }
}

export default ContactListPractice;