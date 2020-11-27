import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';
import  {landingPage}  from './../lib/mirage/landingPageMock';
import Menu from './../templates/simple-bootstrap-theme/components/menu';


export default test('adds 1 + 2 equals 3',()=>{
  expect(1+2).toBe(3)
});

configure({adapter: new Adapter()});
describe('It should render landing page',()=>{
  //console.log(landingPage);
  it('renders the menu component', ()=>{
    const menu = shallow(<Menu data={landingPage.landingPage}/>);
    expect(menu.find('Navbar'));
  })
})