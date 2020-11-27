import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import LandingPage from '../../../models/LandingPage';

class Banner extends Component<{data:LandingPage},{}>{
  render(){
    //console.log(this.props.LandingPageProps.Banner);
    const img = `${process.env.WebServicePath}${this.props.data.Banner.url}`;
    return (<Image src={img} fluid />)
  }
}

export default Banner;