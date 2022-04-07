import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import headerStyle from './index.module.css';
import './customNav.css';
import LanguageToggler from "../LanguageToggler/LanguageToggler";

function HeaderMain() {
    return (
        <>
            <div className='header'>
                <div className="header-blue">
                    <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                        <div className="container p-0">
                            <h2 className='headingMain col-xl-5 col-lg-3'>SMART CIVIL ENGINEERING</h2>
                            <div className='logoTemp'><img src={logo} className="App-logo" alt="logo" /></div>
                            {/*<a className="navbar-brand" href="#">SMART CIVIL ENGINEERING</a>*/}
                            <button className="navbar-toggler bg-dark" data-toggle="collapse" data-target="#navcol-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between col-xl-7 col-lg-5" id="navcol-1">
                                <ul className="nav navbar-nav justify-content-center w-100 ">
                                    <li className='nav-item mx-1  active' ><Link to='/' ><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-center'>Main</button></Link></li>
                                    <li className='nav-item mx-1 '><Link to='/about' ><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-center'>About</button></Link></li>
                                    <li className='nav-item mx-1 '><Link to='/articles'><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-center'>Articles</button></Link></li>
                                    <li className='nav-item mx-1 '><Link to='/services'><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-center'>Services</button></Link></li>
                                    <li className='nav-item mx-1 '><Link to='/contacts'><button type='button' className='customNavBtn nav-item nav-link btn-lg text-white btn-outline-dark text-center'>Contacts</button></Link></li>
                                </ul>
                                <div className='login-menu flex-column col-xl-2 col-lg-2'>
                                    <div className='languages mb-2 d-flex justify-content-around'>
                                        <span className='text-info d-inline-block'>en</span>
                                        <span className='text-secondary d-inline-block'>|</span>
                                        <span className='text-info d-inline-block'>ua</span>
                                    </div>
                                    <button className='btn btn-sm btn-outline-info w-100 mb-2' type='button'>Login</button>
                                    <button className='btn btn-sm btn-outline-info w-100 mb-2' type='button'>Signup</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='green-strype'/>

        </>
    );
}

export default HeaderMain;
