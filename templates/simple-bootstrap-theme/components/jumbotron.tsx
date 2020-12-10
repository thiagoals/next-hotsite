import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';
import {useSelector} from 'react-redux';

const AboutUs = (()=>{
  const landingPage:LandingPage = useSelector(state => state.landingPageReducer);
  return (
    <div style={{alignSelf: 'stretch',textAlign: 'center',paddingTop:"10vh",paddingBottom:"5vh", paddingLeft:'20px',paddingRight:'20px',backgroundColor:"#fff"}}>
      <h1>{landingPage.AboutUsTitle}</h1>
      <p>
        {landingPage.AboutUsSubtitle}
      </p>
    </div>
  )
});

export default AboutUs;