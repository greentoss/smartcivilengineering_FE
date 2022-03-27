import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import headerStyle from './index.module.css';
import './customNav.css'

function HeaderMain() {
    return (
        <>
            <div className={headerStyle.header}>
                <div className="container" >
                    <div className="row justify-content-between align-items-center pt-3 pb-3" >
                        <div className='row font-weight-bold col-lg-6 col-sm-4 p-0 pl-5 d-flex' >
                            <h2 className={headerStyle.headingMain}>SMART CIVIL ENGINEERING</h2>
                            <div className='d-flex align-items-center'><img src={logo} className="App-logo" alt="logo" /></div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light col-6 pl-sm-0 ">
                            <div className="container-fluid p-0">
                                {/*<a className="navbar-brand font-weight-bold col-3" href="#">Games</a>*/}
                                <button className="navbar-toggler bg-dark customToggleBtn" type="button" data-toggle="collapse"
                                        data-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav d-flex justify-content-lg-end">
                                        <li className='mr-lg-4 mt-sm-2 nav-item  active' ><Link to='/' ><a className='nav-link btn-lg text-white bg-dark text-sm-center'>Main</a></Link></li>
                                        <li className='mr-lg-4 mt-sm-2 nav-item '><Link to='/about' className=''><a className='nav-link btn-lg text-white bg-dark text-sm-center'>About</a></Link></li>
                                        <li className='mr-lg-4 mt-sm-2 nav-item '><Link to='/articles'><a className='nav-link btn-lg text-white bg-dark text-sm-center'>Articles</a></Link></li>
                                        <li className='mr-lg-4 mt-sm-2 nav-item '>< Link to='/services'><a className='nav-link btn-lg text-white bg-dark text-sm-center'>Services</a></Link></li>
                                        <li className='mr-lg-4 mt-sm-2'>< Link to='/'><a href="#contact" className='nav-item nav-link btn-lg text-white bg-dark text-sm-center'>Contacts</a></Link></li>
                                    </ul>
                                    {/*<a className="d-block p-2 bg-dark text-white d-sm-none d-md-none d-lg-block" href="#">Push to*/}
                                    {/*    start</a>*/}
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
            <div className='green-strype'/>

        </>
    );
}

export default HeaderMain;
