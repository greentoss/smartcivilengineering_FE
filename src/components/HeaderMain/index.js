import react from 'react';
import {Link} from "react-router-dom";
import logo from "../../logo.svg";
import headerStyle from './index.module.css';

function HeaderMain() {
    return (
        <>
            <div className={headerStyle.header}>
                <div className="header-content container " >
                    <div className="row justify-content-between align-items-center">
                        <div className='row font-weight-bold col-5 p-0'>
                            <h2 className={headerStyle.headingMain}>SMART CIVIL ENGINEERING</h2>
                            <div className='d-flex align-items-center'><img src={logo} className="App-logo" alt="logo" /></div>
                        </div>
                        <nav>
                            <ul id="menu">
                                <li id="nav1" className="active"><Link to='/'><span>Main</span></Link></li>
                                <li id="nav2"><Link to='/about'><span>About</span></Link></li>
                                <li id="nav3"><Link to='/articles'><span>Articles</span></Link></li>
                                <li id="nav4">< Link to='/services'><span>Services</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="wrapper">
                        {/*<div className="slider">*/}
                        {/*    <ul className="items">*/}
                        {/*        <li><img src="images/img1.jpg" alt=""></li>*/}
                        {/*        <li><img src="images/img2.jpg" alt=""></li>*/}
                        {/*        <li><img src="images/img3.jpg" alt=""></li>*/}
                        {/*        <li><img src="images/img4.jpg" alt=""></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMain;
