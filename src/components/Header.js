import React , {useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const [userState , setUserState] = useState("Login");

   
    return (  
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} alt="logoheader"/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About Us</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/cart">Cart</Link>
                </li>
                
                <button className="login-logout" onClick={()=> {userState === "Login" ? setUserState("Logout") : setUserState("Login")}}>{userState}</button>
            </ul>
        </div>
    </div>
);
};

export default Header;

