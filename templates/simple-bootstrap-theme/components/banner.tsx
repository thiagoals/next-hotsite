import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from '../../../models/LandingPage';
import {useSelector} from 'react-redux';

const Banner = (()=>{
  const landingPage:LandingPage = useSelector(state => state.landingPageReducer);
  return (
    <div className="banner-container">
        <video src={require('./../assets/video/video-1.mp4')} 
          autoPlay loop muted
          style={{ objectFit: "cover", width:"100%", height:"100%", position: "fixed", zIndex: -1 }}/>
        <div style={{alignSelf: 'stretch',textAlign: 'center',width:"100%", height:"100vh"}}>     
          <h1 style={{paddingTop:'30vh',color:"#fff", fontSize:"55px",paddingLeft:"20px",paddingRight:"20px"}}>
            {landingPage.BannerTitle}
          </h1>
          <p style={{paddingLeft:"20px",paddingRight:"20px",color:"#fff", fontSize:"30px"}}>
          {landingPage.BannerDescription}
          </p>
        </div>
      </div>
  );
})

export default Banner;