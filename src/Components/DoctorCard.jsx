import React from 'react';
import { Card} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const DoctorCard = (props) => {

return(
    <>
        <div className="col-md-3 col-10 mx-auto">
            <Card>
            <Card.Header className="hovereffect">            
            <Card.Img className="img-responsive" src={props.imgsrc} alt={props.imgsrc} />
            <div className="overlay">
                <h2>{props.title}</h2>
                <NavLink to=""  className="info">Know More</NavLink>             
            </div>    
            </Card.Header>
            <Card.Body className="text-center">
                <h5>{props.title}</h5>
                <h6>{props.speciality}</h6>
            </Card.Body>
            </Card>
        </div>
    </>
);

};

export default DoctorCard;
