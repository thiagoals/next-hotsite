import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image} from 'react-bootstrap';
import styled from "styled-components";

const SocialMediaContainer = styled(Col)`
  @media(max-width:475px){
    text-align:center;
    padding:10px 10px 10px 10px;
  }

  @media(min-width:476px){
    text-align:right;
    padding:10px 10px 10px 10px;
  }
`;

class Footer extends Component{
  render(){
    return (
      <Container fluid>
        <Row style={{backgroundColor:"#fff"}}>
          <Col xs={12} md={6} lg={4} xl={4} style={{alignContent:"center",textAlign:"center",padding:"20px 10px 10px 10px"}}>
          © TH Soluções. Todos os direitos reservados. ™
          </Col>
          <SocialMediaContainer xs={12} md={6} lg={8} xl={8}>
            <Col>
              <Image src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png" width="40"/>
              <Image src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353424-instagram-logo_107474.png" width="40"/>
              <Image src="https://cdn3.iconfinder.com/data/icons/picons-social/57/58-youtube-512.png" width="38" />
              <Image src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="39" />
            </Col>
          </SocialMediaContainer>
        </Row>
      </Container>  
    )
  }
}

export default Footer;