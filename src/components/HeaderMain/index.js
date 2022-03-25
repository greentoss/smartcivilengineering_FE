import react from 'react';
import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import headerStyle from './index.module.css';

function HeaderMain() {
    return (
        <>
            <div className={headerStyle.header}>
                <div className="header-content container " >
                    <div className="row justify-content-between align-items-center pt-3 pb-3" >
                        <div className='row font-weight-bold col-5 p-0'>
                            <h2 className={headerStyle.headingMain}>SMART CIVIL ENGINEERING</h2>
                            <div className='d-flex align-items-center'><img src={logo} className="App-logo" alt="logo" /></div>
                        </div>

                        <nav className="navbar navbar-expand-lg navbar-light col-7">
                            {/*<a className="navbar-brand font-weight-bold col-3" href="#">Games</a>*/}
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <li className='ml-4 active' ><Link to='/' ><a className='nav-item nav-link btn-lg text-white bg-dark'>Main</a></Link></li>
                                    <li className='ml-4'><Link to='/about' className=''><a className='nav-item nav-link btn-lg text-white bg-dark'>About</a></Link></li>
                                    <li className='ml-4'><Link to='/articles'><a className='nav-item nav-link btn-lg text-white bg-dark'>Articles</a></Link></li>
                                    <li className='ml-4'>< Link to='/services'><a className='nav-item nav-link btn-lg text-white bg-dark'>Services</a></Link></li>
                                </div>
                                {/*<a className="d-block p-2 bg-dark text-white d-sm-none d-md-none d-lg-block" href="#">Push to*/}
                                {/*    start</a>*/}
                            </div>
                        </nav>

                    </div>
                </div>
            </div>


        </>
    );
}

export default HeaderMain;
