import { Jumbotron, Card, Accordion, Button } from 'react-bootstrap';
import * as Scroll from 'react-scroll';

import '../../App.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function About(){

    const openBallchasingLink = (event) => {
        event.preventDefault(); 
        window.open('https://ballchasing.com', '_blank');   
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
                            Where can I find my saved Replay?
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
                            Solo Duel is arguably the most efficient way of improving your Rocket League skills <br />
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
                        <Card.Body>No content yet hold your horses</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </Jumbotron>
        </ Scroll.Element>
    );

}


export default About;