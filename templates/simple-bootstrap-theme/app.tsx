import React, { Component } from 'react';
import Menu from './components/menu';
import Banner from './components/banner';
import AboutUs from './components/jumbotron';
import LandingPage from '../../models/LandingPage';
import Cards from './components/cards';
import Contact from './components/contact';
import Footer from './components/footer';
import {useSelector} from 'react-redux';


 const App = (()=>{
    const landingPage:LandingPage = useSelector(state => state.landingPageReducer);
    return (<>
        <Menu data={landingPage}/>
        <Banner data={landingPage}/>
        <AboutUs data={landingPage}/>
        <Cards data={landingPage}/>
        <Contact data={landingPage}/>
        <Footer/>
    </>)
 });

export default App;