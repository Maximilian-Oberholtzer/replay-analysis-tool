import './App.css';
import Navigator from './Navigator';
import About from './About';
import Analyze from './Analyze';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import rlImage1 from './rl-image-1.jpg';
import rlImage2 from './rl-image-2.jpg';
import rlImage3 from './rl-image-3.jpg';

import { Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App-page"> 
        <Navigator />
          <Switch>
            <Route path="/" exact component={HomePage} /> 
            <Route path="/about" component={About} />
            <Route path="/analyze" component={Analyze} />
          </Switch>
      </div> 
    </Router> 
  );
}

const HomePage = () => (
  <div className="App-page">
    <hr />
    <h1 className="title">Home</h1>
    <CardDeck className="Card-deck">
      <Card className="Card">
        <Card.Img variant="top" src={rlImage2} />
        <Card.Body>
          <Card.Title>Get Started</Card.Title>
          <Card.Text>
            Start capturing statistics while watching a solo duel replay.
          </Card.Text>
            <Link className="Home-link-style" to="/analyze">
              <Button className="Menu-button"> Begin </Button>
            </Link>
        </Card.Body>
      </Card>
      <Card className="Card">
        <Card.Img variant="top" src={rlImage1} />
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
          Here you will be able to analyze your solo duel replays and get useful feedback that can
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
          <Link className="Home-link-style" to="/about">
            <Button className="Menu-button"> About </Button>
          </Link>
        </Card.Body>
      </Card>
    </CardDeck>
    <hr />
  </div>  
);

/*
<div className="overview">
      <div>
        Welcome to Feed's replay analysis tool! Here you will be able to 
        analyze your solo duel replays and get useful feedback that can
        help you improve your Rocket League skills.
      </div>
    </div>
    <div className="selection">
      <nav>
        <Link className="Home-link-style" to="/analyze">
          <Button className="Menu-button"> Start </Button>
        </Link>
      </nav>
    </div>
    <div className="selection">
      <nav>
        <Link className="Home-link-style" to="/about">
          <Button className="Menu-button"> About </Button>
        </Link>
      </nav>
    </div>
*/

export default App;
