import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Services from "./components/Services";
import Articles from "./components/Articles";
import ClientError from "./components/ClientError";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (<>
    <Router >
        <HeaderMain />
        <Routes>
            <Route exact path='/' element = {<Main />} />
            <Route path='/about' element = {<About />} />
            <Route path='/articles' element = {<Articles />} />
            <Route path='/services' element = {<Services />} />
            <Route path = '*' element = {<ClientError />} />
        </Routes>


        {/*<div className="App">*/}
        {/*    <header className="App-header">*/}
        {/*        <h2>SMART CIVIL ENGINEERING</h2>*/}
        {/*        <img src={logo} className="App-logo" alt="logo" />*/}
        {/*    </header>*/}
        {/*</div>*/}
    </Router>
    </>
  );
}

export default App;
