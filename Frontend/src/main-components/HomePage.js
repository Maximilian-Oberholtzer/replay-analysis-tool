import React from 'react';
import '../App.css';
import rlImage1 from '../resources/rl-image-1.jpg';
import rlImage2 from '../resources/rl-image-2.jpg';
import rlImage3 from '../resources/rl-image-3.jpg';
import { Link } from 'react-router-dom';
import { Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return(
        <div>
            <CardDeck className="Card-deck">
            <Card className="Card">
                <Card.Img variant="top" src={rlImage2} />
                <Card.Body>
                <Card.Title>Get Started</Card.Title>
                <Card.Text>
                    Send in a solo duel replay to be analyzed.
                </Card.Text>
                    <Link className="Home-link-style" to={process.env.PUBLIC_URL + '/analyze'}>
                    <Button className="Menu-button"> Begin </Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="Card">
                <Card.Img variant="top" src={rlImage1} />
                <Card.Body>
                <Card.Title>Welcome!</Card.Title>
                <Card.Text>
                Here you will be able to analyze your solo duel replays and generate a report with useful feedback that can
                help you improve your Rocket League skills.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="Card">
                <Card.Img variant="top" src={rlImage3} />
                <Card.Body>
                <Card.Title>Learn More</Card.Title>
                <Card.Text>
                    Learn about the creator of this tool and how it works.
                </Card.Text>
                <Link className="Home-link-style" to={process.env.PUBLIC_URL + '/about'}>
                    <Button className="Menu-button"> About </Button>
                </Link>
                </Card.Body>
            </Card>
            </CardDeck>
        </div>  
    );
}

export default HomePage;