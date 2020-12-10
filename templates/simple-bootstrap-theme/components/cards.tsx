import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';
import UniqueCard from './card';
import {useSelector} from 'react-redux';

const Cards = (()=>{
  const landingPage:LandingPage = useSelector(state => state.landingPageReducer);
  return (
    <Container style={{textAlign:"center",width:"100%",backgroundColor:"#fff", display:"flex", paddingLeft:"5%", paddingRight:"5%", marginTop:"-1px"}} fluid>
      <Row style={{width:"100%",marginLeft:"0px",marginRight:"0px"}}>
        {landingPage.AboutUsCards
        .map((card,i)=>{
            return (<Col xs={12} md={12} lg={4} xl={4} key={i}><UniqueCard data={card} key={i}/></Col>)
        })}
      </Row>
    </Container>
  )
});

export default Cards;