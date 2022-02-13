import react from 'react';
import {Link} from "react-router-dom";
import logo from "../../logo.svg";

function HeaderMain() {
    return (
        <>
            <h2>SMART CIVIL ENGINEERING</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/articles'>Articles</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default HeaderMain;