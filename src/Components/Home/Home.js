import "./Home.css";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="division">
            <table>
                <thead>
                    <tr>
                        <th>Projects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/Counter' className="removeLine">Counter</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/UserProfile' className="removeLine">User Profile</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Clock' className="removeLine">Clock</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/BlogList' className="removeLine">Blog</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/ProjectItems' className="removeLine">ProjectItemDetails</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/ContactList' className="removeLine">ContactList</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/AppStore' className="removeLine">AppStore</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/FlexBox' className="removeLine">FlexBox</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Login' className="removeLine">Athentication</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/WithoutRedux' className="removeLine">WithoutRedux</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/WithRedux' className="removeLine">Redux</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/PractUserProfileMain' className="removeLine">PractUserProfileMain</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/ContactPractice' className="removeLine">Contact List ContactPractice</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/CommentsApp' className="removeLine">Comments APP</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/FName' className="removeLine">FHelloName</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home;