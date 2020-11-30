import {Jumbotron,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';

class AboutUs extends Component<{data:LandingPage}>{
    render(){
        return (
          <div style={{alignSelf: 'stretch',textAlign: 'center',paddingTop:"10vh",paddingBottom:"10vh", paddingLeft:'20px',paddingRight:'20px',backgroundColor:"#fff"}}>
            <h1>{this.props.data.AboutUsTitle}</h1>
            <p>
              {this.props.data.AboutUsSubtitle}
            </p>
          </div>)
    }
}

export default AboutUs;