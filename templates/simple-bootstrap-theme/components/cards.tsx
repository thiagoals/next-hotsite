import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';
import UniqueCard from './card';

class Cards extends Component<{data:LandingPage}>{
  render(){
    return(
      <Container style={{backgroundColor:"#fff", display:"flex", paddingLeft:"10%", paddingRight:"10%", marginTop:"-1px"}} fluid>
        <Row>
          {this.props.data.AboutUsCards
          .map((card,i)=>{
              return (<Col><UniqueCard data={card} key={i}/></Col>)
          })}
        </Row>
      </Container>
    )
  }
}

export default Cards;