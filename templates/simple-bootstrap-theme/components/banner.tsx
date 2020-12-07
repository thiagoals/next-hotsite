import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import LandingPage from '../../../models/LandingPage';

class Banner extends Component<{data:LandingPage},{}>{
  render(){
    //console.log(this.props.LandingPageProps.Banner);
    return (
      <div className="banner-container">
        <video src={require('./../assets/video/video-1.mp4')} 
          autoPlay loop muted
          style={{ objectFit: "cover", width:"100%", height:"100%", position: "fixed", zIndex: -1 }}/>
        <div style={{alignSelf: 'stretch',textAlign: 'center',width:"100%", height:"100vh"}}>     
          <h1 style={{paddingTop:'30vh',color:"#fff", fontSize:"55px",paddingLeft:"20px",paddingRight:"20px"}}>
            {this.props.data.BannerTitle}
          </h1>
          <p style={{paddingLeft:"20px",paddingRight:"20px",color:"#fff", fontSize:"30px"}}>
          {this.props.data.BannerDescription}
          </p>
        </div>
      </div>
    )
    //return (<Image src={img} fluid style={{width:"100%"}}/>)
  }
}

export default Banner;