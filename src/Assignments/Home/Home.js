import "./Home.css";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="division">
            <table>
                <thead>
                    <tr>
                        <th>Component</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to='Counter' className="removeLine">Counter</Link>
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
                            <Link to='ContactList' className="removeLine">ContactList</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Home;