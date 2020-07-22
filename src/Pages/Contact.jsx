import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () =>{

const [data, setData] = useState({
    fullname:'',
    about:'',
    message:'',
    email:'',
    phone:''
})

const InputEvent = (event) =>{
    const {name , value} = event.target;
    setData((preVal) => {
        return {
            ...preVal,
            [name]:value,
        }

    });
};

const formSubmit = (e) =>{
  e.preventDefault();
  alert(`Thank you for contacting us : ${data.fullname} `);
};



return(
<>
<div className="my-5">
    <h1 className="text-center">Contact US</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={formSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="First Name, Last Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Which division of hospital is your enquiry about?</Form.Label>
                    <Form.Control as="select" name="about" value={data.about} onChange={InputEvent}>
                        <option>Physio</option>
                        <option>Health Assessments</option>
                        <option>Others</option>                    
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What can we help you with? (Optional)</Form.Label>
                    <Form.Control as="textarea" name="message" value={data.message} onChange={InputEvent} rows="3" />
                </Form.Group>
                <h5>Please tell us your contact details so we can get back to you</h5>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="number" name="phone" value={data.phone} onChange={InputEvent} placeholder="" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit enquiry
                </Button>
            </Form>
        </div>
    </div>
</div>

</>
);
};

export default Contact;