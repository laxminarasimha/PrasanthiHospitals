import React from 'react';
import { Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ServiceCard = (props) => {

return(
    <>
        <div className="col-md-4 col-10 mx-auto">
            <Card>
            <Card.Img variant="top" src={props.imgsrc} className="myimage" />
            <Card.Body>
            <Card.Title font-weight-bold>{props.title}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>            
            </Card.Body>
            </Card>
        </div>
    </>
);

};

export default ServiceCard;
