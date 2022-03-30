import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import headerStyle from './index.module.css';
import './customNav.css'
import LanguageToggler from "../LanguageToggler/LanguageToggler";

function HeaderMain() {
    return (
        <>
            <div className={headerStyle.header}>
                <div className="container" >
                    <div className="row justify-content-between align-items-center pt-3 pb-3" >
                        <div className='row font-weight-bold col-lg-5 col-sm-4 p-0 pl-3 d-flex align-items-center' >
                            <h2 className={headerStyle.headingMain}>SMART CIVIL ENGINEERING</h2>
                            <div className='p-0'><img src={logo} className="App-logo" alt="logo" /></div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light col-lg-6 col-sm-3 p-0 pl-sm-0 ">
                            <div className="container-fluid p-0">
                                {/*<a className="navbar-brand font-weight-bold col-3" href="#">Games</a>*/}
                                <button className="navbar-toggler bg-dark customToggleBtn" type="button" data-toggle="collapse"
                                        data-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav d-flex justify-content-lg-around">
                                        <li className='mx-lg-1 mt-sm-2 nav-item  active' ><Link to='/' ><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-sm-center'>Main</button></Link></li>
                                        <li className='mx-lg-1 mt-sm-2 nav-item '><Link to='/about' className=''><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-sm-center'>About</button></Link></li>
                                        <li className='mx-lg-1 mt-sm-2 nav-item '><Link to='/articles'><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-sm-center'>Articles</button></Link></li>
                                        <li className='mx-lg-1 mt-sm-2 nav-item '><Link to='/services'><button type='button' className='customNavBtn nav-link btn-lg text-white btn-outline-dark text-sm-center'>Services</button></Link></li>
                                        <li className='mx-lg-1 mt-sm-2 nav-item '><Link to='/contacts'><button type='button' className='customNavBtn nav-item nav-link btn-lg text-white btn-outline-dark text-sm-center'>Contacts</button></Link></li>
                                    </ul>
                                    {/*<a className="d-block p-2 bg-dark text-white d-sm-none d-md-none d-lg-block" href="#">Push to*/}
                                    {/*    start</a>*/}
                                </div>

                            </div>
                        </nav>
                        <div className='login-menu flex-column col-lg-1'>
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
            </div>
            <div className='green-strype'/>

        </>
    );
}

export default HeaderMain;
