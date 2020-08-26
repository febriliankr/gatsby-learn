import React from 'react'
import { navigate } from 'gatsby'
import Header from '../components/Header';
import { Form, Button } from 'react-bootstrap';
import PrimaryLayout from '../layout/PrimaryLayout'


function About() {
    return (
        <PrimaryLayout>
                <h1>About or Send a Message</h1>
                    <Form>
                        <Form.Group controlId="contactForm.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                         </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="contactForm.Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject..." />
                        </Form.Group>
                        <Form.Group controlId="contactForm.Message">

                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Message..." />
                        </Form.Group>


                        <Button variant="primary" type="submit">Send</Button>
                    </Form>
                

        </PrimaryLayout>
    )
}

export default About;
