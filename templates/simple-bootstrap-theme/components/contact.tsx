import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Button,Row,Col, FormControl} from 'react-bootstrap';

class Contact extends Component<{data:any}>{
  render(){
    return (
      <Container style={{alignSelf: 'stretch',textAlign: 'center',paddingLeft:'0px',paddingRight:'0px',backgroundColor:"#000"}} fluid>
        <div style={{padding:"5px",paddingTop:"5vh", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",backgroundSize:"cover"}}>
          <h1 style={{color:"#fff"}}>{this.props.data.ContactTitle}</h1>
          <p style={{color:"#fff"}}>
            {this.props.data.ContactDescription}
          </p>
          <Row style={{margin:"40px 0px 40px 0px"}}>
            <Col xs={12} md={12} lg={{span:6, offset:3}} xl={{span:4, offset:4}} style={{alignContent:"center"}}>
              <Card style={{padding:"0px 10px 0px 10px"}}>
                <Card.Body>
                  <Card.Title style={{marginBottom:"30px"}}>{this.props.data.ContactCardTitle}</Card.Title>
                  <Card.Text>
                    <FormControl
                      placeholder={this.props.data.InputTypeEmail}
                      aria-label={this.props.data.InputTypeEmail}
                      aria-describedby="basic-addon1"
                      style={{margin:"10px 0px 10px 0px"}}
                    />
                    <FormControl
                      placeholder={this.props.data.InputTypePhone}
                      aria-label={this.props.data.InputTypePhone}
                      aria-describedby="basic-addon1"
                      style={{margin:"10px 0px 10px 0px"}}
                    />
                    <FormControl as="textarea" aria-label="With textarea" placeholder={this.props.data.InputTypeDescription} />
                  </Card.Text>
                  <Button variant="primary" style={{margin:"10px 0px 10px 0px"}}>{this.props.data.InputTypeButton}</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Contact;