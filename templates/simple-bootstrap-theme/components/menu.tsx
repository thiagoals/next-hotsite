import {Nav,Navbar,Button,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LandingPage from '../../../models/LandingPage';
import {useSelector} from 'react-redux';

const Menu = (()=>{
    const landingPage:LandingPage = useSelector(state => state.landingPageReducer);
    return (<div style={{position:"fixed",width:"100%"}}>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><Image src={`${(!process.env.UseMock)?process.env.WebServicePath:''}${landingPage.Logo.url}`} height="60"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{marginRight:20}}>
                {landingPage.Menus
                .sort(({Order:previousOrder},{Order:currentOrder})=>previousOrder-currentOrder)
                .map((menu,i)=>{
                    return (<Nav.Link href={menu.Link} key={i}>{menu.Description}</Nav.Link>)
                })}
            </Nav>
            <Button variant="outline-success">Sign In</Button>
        </Navbar.Collapse>
        </Navbar>
    </div>)
});

export default Menu;