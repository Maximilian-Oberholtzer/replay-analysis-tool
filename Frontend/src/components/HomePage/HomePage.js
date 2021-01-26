import React from 'react';
import axios from "axios";
import * as Scroll from 'react-scroll';
import { Button, CardDeck, Card, Form } from 'react-bootstrap';

import '../../App.css';
import './HomePage.css';

import rlImage1 from '../../resources/rl-image-1.jpg';
import rlImage2 from '../../resources/rl-image-2.jpg';
import rlImage3 from '../../resources/rl-image-3.jpg';

import Ranks from '../Ranks/Ranks';
import CoreStats from '../CoreStats/CoreStats';


import 'bootstrap/dist/css/bootstrap.min.css';

//Website used for replay data:  Ballchasing.com

//example replay input: 9d03f4bd-a853-4bda-867c-3f57c04904e6  AyyJayy vs Spider

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {key: '', analyzeMessage: '', uploadMessage: '', replayData: null, fileName: 'Browse...', file: null};
    }

    // When user types into enter ID field
    handleChange = (event) => {
        this.setState({key: event.target.value});
        this.setState({analyzeMessage: ''});
    }

    // When user chooses a file to upload
    handleFile = (event) => {
        this.setState({analyzeMessage: ''});
        this.setState({uploadMessage: ''});  
        if(event.target.files[0] !== undefined){
            let file = event.target.files[0];
            this.setState({file: file, fileName: event.target.files[0].name});
        }
        else{
            this.setState({fileName: 'Browse...'});
        }    
    }

    //Send replay file to backend api call
    uploadFile = () => {
        let file = this.state.file;
        let formdata = new FormData();

        if(file !== null){
            this.setState({uploadMessage: "Loading..."});
            formdata.append('file', file);
            axios.post("/api/postreplay", formdata, {
            }).then(response => {
                if(response.data.hasOwnProperty('error') && response.data.hasOwnProperty('id')){
                    this.setState({uploadMessage: "Replay ID: " + response.data.id});
                }
                else if(response.data.hasOwnProperty('error')){
                    this.setState({uploadMessage: "Please select a valid file."});
                }
                else{
                    this.setState({uploadMessage: "Replay ID: " + response.data.id});
                }
            })
        }
        else{
            this.setState({uploadMessage: "Please select a file before uploading."});
        }
    }

    //Get replay data from backend api call
    fetchReplayData = () => {
        if(this.state.key !== ''){
            this.setState({analyzeMessage: "Loading..."});
            axios.get("/api/getreplay/" + this.state.key).then(response => {
                if(response.data.hasOwnProperty('error')){
                    this.setState({analyzeMessage: "Please enter a valid replay ID."});
                }
                else{
                    if(response.data.team_size !== 1){
                        this.setState({analyzeMessage: "Please enter a solo duel replay."})
                    }
                    else{
                        this.setState({analyzeMessage: "Data fetch successful!"});
                        this.setState({replayData: response});

                        const scrollOptions = {
                            duration: 1800,
                            delay: 200
                        }
                        Scroll.animateScroll.scrollTo(900, scrollOptions);
                    }
                }
            })
        }
        else{
            this.setState({analyzeMessage: "Replay ID field cannot be empty."});
        }
    }


    //Render the Home Page output
    render(){
        return(
            <div>
                <CardDeck className="Card-deck">
                <Card className="Card">
                    <Card.Img variant="top" src={rlImage2} />
                    <Card.Body>
                    <Card.Title>Get Started</Card.Title>
                    <Form.Group className="Replay-form">
                        <Form.Control type="textarea" placeholder="Replay ID" onChange={this.handleChange}/>
                    </Form.Group>
                        <Button className="Menu-button" onClick={this.fetchReplayData} > Analyze </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.state.analyzeMessage}</small>
                    </Card.Footer>
                </Card>
                <Card className="Card">
                    <Card.Img variant="top" src={rlImage1} />
                    <Card.Body>
                    <Card.Title>Upload Replay</Card.Title>
                        <div className="File-upload">
                            <label htmlFor="file-upload" className="File-upload-label">
                                {this.state.fileName}
                            </label>
                             <input id="file-upload" type="file" onChange={(e)=>this.handleFile(e)}/>
                        </div>
                        <div />
                        <Button className="Menu-button" onClick={this.uploadFile}> Upload </Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.state.uploadMessage}</small>
                    </Card.Footer>
                </Card>
                <Card className="Card">
                    <Card.Img variant="top" src={rlImage3} />
                    <Card.Body>
                    <Card.Title>Learn More</Card.Title>
                    <Card.Text>
                        Learn about the creator of this tool and how it works.
                    </Card.Text>
                        <Button className="Menu-button"> About </Button>
                    </Card.Body>
                </Card>
                </CardDeck>
                <GetReplayTitle data={this.state.replayData} />
                <Ranks data={this.state.replayData} />
                <CoreStats data={this.state.replayData} />
            </div>  
        );
    }
    
}

function GetReplayTitle(data){
    if(data.data != null){
        const title = data.data.data.title.toString();
        return <h1 className="title"> Replay title: {title} </h1>;
    }
    else{
        return(null);
    }      
}

export default HomePage;