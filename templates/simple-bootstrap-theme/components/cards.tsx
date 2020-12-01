import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';
import UniqueCard from './card';

class Cards extends Component<{data:LandingPage}>{
  render(){
    return(
      <Container style={{textAlign:"center",width:"100%",backgroundColor:"#fff", display:"flex", paddingLeft:"10%", paddingRight:"10%", marginTop:"-1px"}} fluid>
        <Row style={{width:"100%"}}>
          {this.props.data.AboutUsCards
          .map((card,i)=>{
              return (<Col xs={12} md={12} lg={4} xl={4} key={i}><UniqueCard data={card} key={i}/></Col>)
          })}
        </Row>
      </Container>
    )
  }
}

export default Cards;