import { Jumbotron, Card, Accordion, Button, Form, Col} from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import axios from "axios";

import '../../App.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function About(){

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [feedbackResponse, setFeedbackResponse] = useState("");

    const openBallchasingLink = (event) => {
        event.preventDefault(); 
        window.open('https://ballchasing.com', '_blank');   
    }

    const changeName = (event) => {
        setName(event.target.value);
        setFeedbackResponse("");
    }

    const changeMessage = (event) => {
        setFeedbackResponse("");
        setMessage(event.target.value);
    }

    const sendFeedback = () => {
        const feedbackData = {
            name,
            message
        };

        if(name !== "" && message !== ""){
            axios.post("api/sendfeedback", feedbackData).then(response => {
                setName("");
                setMessage("");
                document.getElementById('name').value = "";
                document.getElementById('message').value = "";
                if(response.request.status === 200){
                    setFeedbackResponse("Feedback sent!");
                }
                else{
                    setFeedbackResponse("Error! Please Try Again.");
                }
            })
        }
        else{
            setFeedbackResponse("Name or message cannot be empty.");
        }
    }

    return(
        <Scroll.Element name="About">
            <Jumbotron className="About-section">
                <h1 className="About-title">Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="Accordion-button">
                            What is a Replay ID?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="Accordion-text">
                            Replay ID's can be found at <Button className="Ballchasing-link" onClick={openBallchasingLink}>Ballchasing.com</Button> <br />
                            Example ID:  https://ballchasing.com/replay/<mark>9621655d-704d-454e-89b7-cda9718fed23</mark>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="Accordion-button">
                            Where can I find my saved replay?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body className="Accordion-text">
                            File Explorer &gt; Documents &gt; My Games &gt; Rocket League &gt; TAGame &gt; Demos
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" className="Accordion-button">
                            Why solo duel?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Solo Duel is arguably the most efficient way to improve your Rocket League skills <br />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3" className="Accordion-button">
                            Who is Feed?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Feed! is a multi-season top 100 Solo Duel player with 4000+ hours played</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4" className="Accordion-button">
                            How can I submit feedback?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Form className="Feedback-form">
                                <Form.Row className="align-items-center">
                                    <Col xs={4} className="Feedback-name">
                                        <Form.Control className="mb-2 Feedback-input" placeholder="Name" onChange={changeName}  id="name"/>
                                    </Col>
                                    <Col xs={8} className="Feedback-message">
                                        <Form.Control className="mb-2 Feedback-input" placeholder="Feedback" onChange={changeMessage} id="message"/>
                                    </Col>
                                </Form.Row>
                                <Button className="mb-2 Submit-button" onClick={sendFeedback}>
                                    Submit
                                </Button>
                            </Form>
                            <small className="text-muted">
                                {feedbackResponse}
                            </small>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Jumbotron>
        </ Scroll.Element>
    );

}

export default About;