import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm () {
    return(
        <Form action="mailto:najibkadaluwarso@gmail.com" method="get" className="bg-light text-dark p-5 border shadow">
            <div className="row">
                <Form.Group className="mb-3 col-lg-6" controlId="firstName">
                    <Form.Label className="w-100 text-start text-capitalize">Frist Name</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="secondName">
                    <Form.Label className="w-100 text-start text-capitalize">Second Name</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="emailAddress">
                    <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                    <Form.Control type='email'/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="textarea">
                    <Form.Label className="w-100 text-start">Message</Form.Label>
                    <Form.Control as='textarea' rows={3}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default ContactForm;