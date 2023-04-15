import { Link } from 'react-router-dom';
import './Header.css';

const Header=()=>{
    return(
        <div className='nav-bar'>
            <ul className="header">
                <li>
                    <Link to="/" className='removeLine'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='removeLine'>About</Link>
                </li>
                <li>
                    <Link to="/contact" className='removeLine'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;