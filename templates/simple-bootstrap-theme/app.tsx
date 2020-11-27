import React, { Component } from 'react';
import Menu from './components/menu';
import Banner from './components/banner';
import AboutUs from './components/jumbotron';
import LandingPage from '../../models/LandingPage';


class App extends Component {
    render(){
        return (
            <>
                <Menu data={this.props as LandingPage}/>
                <Banner data={this.props as LandingPage}/>
                <AboutUs data={this.props as LandingPage}/>
            </>
        )
    }
}

export default App;