import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Services from "./components/Services";
import Articles from "./components/Articles";
import ClientError from "./components/ClientError";
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
import Banner from "./components/Banner"
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

function App() {
  return (
    <>
        <Router >
            <Banner />
            <HeaderMain />
            <Routes>
                <Route exact path='/' element = {<Main />} />
                <Route path='/about' element = {<About />} />
                <Route path='/articles' element = {<Articles />} />
                <Route path='/services' element = {<Services />} />
                <Route path='/contacts' element = {<Contacts />} />
                <Route path='/login' element = {<Login />} />
                <Route path='/register' element = {<Register />} />
                <Route path='/cart' element = {<Cart />} />
                <Route path = '*' element = {<ClientError />} />
            </Routes>
            <FooterMain />
        </Router>
    </>
  );
}

export default App;
