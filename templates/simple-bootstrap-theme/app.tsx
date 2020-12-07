import React, { Component } from 'react';
import Menu from './components/menu';
import Banner from './components/banner';
import AboutUs from './components/jumbotron';
import LandingPage from '../../models/LandingPage';
import Cards from './components/cards';
import Contact from './components/contact';
import Footer from './components/footer';


class App extends Component {
    render(){
        return (
            <>
                <Menu data={this.props as LandingPage}/>
                <Banner data={this.props as LandingPage}/>
                <AboutUs data={this.props as LandingPage}/>
                <Cards data={this.props as LandingPage}/>
                <Contact data={this.props as LandingPage}/>
                <Footer/>
            </>
        )
    }
}

export default App;