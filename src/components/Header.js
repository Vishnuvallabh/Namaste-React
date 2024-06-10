import React , {useState} from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [userState , setUserState] = useState("Login");

   
    return (  
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL} alt="logoheader"/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-logout" onClick={()=> {userState === "Login" ? setUserState("Logout") : setUserState("Login")}}>{userState}</button>
            </ul>
        </div>
    </div>
);
};

export default Header;