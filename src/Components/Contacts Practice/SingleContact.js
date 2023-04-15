import {Component} from 'react'

class SingleContact extends Component{
    render(){
        // console.log(this.props);
        const {contactDetails}=this.props
        const {name,mobileNumber}=contactDetails

        return(
            <tr>
                <td>{name}</td>
                <td>{mobileNumber}</td>
            </tr>
        )
    }
}

export default SingleContact