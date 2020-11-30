import {Nav,Navbar,Button,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import LandingPage from '../../../models/LandingPage';

class Menu extends Component<{data:LandingPage}>{
    render(){
        //console.log(this.props);
        return (<div style={{position:"fixed",width:"100%"}}>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Image src={`${(!process.env.UseMock)?process.env.WebServicePath:''}${this.props.data.Logo.url}`} height="60"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{marginRight:20}}>
                    {this.props.data.Menus
                    .sort(({Order:previousOrder},{Order:currentOrder})=>previousOrder-currentOrder)
                    .map((menu,i)=>{
                        return (<Nav.Link href={menu.Link} key={i}>{menu.Description}</Nav.Link>)
                    })}
                </Nav>
                <Button variant="outline-success">Sign In</Button>
            </Navbar.Collapse>
            </Navbar>
        </div>)
    }
    
}

export default Menu;