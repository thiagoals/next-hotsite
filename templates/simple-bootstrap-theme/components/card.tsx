import {Button,Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component,createElement} from 'react';
import {CodeSlash,CloudCheckFill,GraphUp, Globe2} from 'react-bootstrap-icons';
import Link from 'next/link';


class UniqueCard extends Component<{data:any}>{
  render(){
    
    const components = {
      CodeSlash: CodeSlash,
      CloudCheckFill: CloudCheckFill,
      GraphUp: GraphUp,
      Globe: Globe2
    };
    const IconCard = createElement(components[this.props.data.Icon],
      {style:{color:"#000",fontSize:"60px"}});
    return(
      <Card style={{ width: '100%', border:"0px", textAlign: 'center', marginBottom:"20px" }}>
        <Card.Body>
          <Card.Title>{IconCard}</Card.Title>
          <Card.Title>{this.props.data.Title}</Card.Title>
          <Card.Text>
            {this.props.data.Description}
          </Card.Text>
          {(this.props.data.HasButton)?
            <Link href={this.props.data.ButtonHref}>
              <Button variant="primary">{this.props.data.ButtonName}</Button>
            </Link>
            :''
          }
        </Card.Body>
      </Card>
    )
  }
}

export default UniqueCard;