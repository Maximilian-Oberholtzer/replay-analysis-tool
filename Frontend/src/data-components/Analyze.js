import React from 'react';
import '../App.css';
import './Analyze.css';
import Ranks from './Ranks'
import { Form, Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

//Website used for replay data:  Ballchasing.com

//example replay input:  f471cb81-74d5-4376-becb-368d996b5b5f  Feed vs DraLi
//                       9d03f4bd-a853-4bda-867c-3f57c04904e6  AyyJayy vs Spider

class Analyze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {key: '', analyzeMessage: '', uploadMessage: '', replayData: null, fileName: 'Browse...', file: null};
    }

    handleChange = (event) => {
        this.setState({key: event.target.value});
    }

    handleFile = (event) => {
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
            formdata.append('file', file);
            axios.post("/api/postreplay", formdata, {
            }).then(response => {
                if(response.data.hasOwnProperty('error') && response.data.hasOwnProperty('id')){
                    this.setState({uploadMessage: "Replay already uploaded. Replay ID: " + response.data.id});
                }
                else if(response.data.hasOwnProperty('error')){
                    this.setState({uploadMessage: "Please select a valid file."});
                }
                else{
                    this.setState({uploadMessage: "Success! Replay ID: " + response.data.id});
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
            axios.get("/api/getreplay/" + this.state.key).then(response => {
                if(response.data.hasOwnProperty('error')){
                    this.setState({analyzeMessage: "Please enter a valid replay ID."});
                }
                else{
                    if(response.data.team_size !== 1){
                        this.setState({analyzeMessage: "Please enter a solo duel replay."})
                    }
                    else{
                        this.setState({analyzeMessage: "Data fetch successful."});
                        this.setState({replayData: response});
                    }
                }
            })
        }
        else{
            this.setState({analyzeMessage: "Replay ID field cannot be empty."});
        }
    }

    //Render the Analyze page
    render(){
        return(
            <div>
                <hr className="Header-hr"/>
                <CardDeck className="Card-deck-analyze-page">
                    <Card className="Card-analyze-page">
                        <Card.Body>
                        <Card.Title>Enter your replay ID</Card.Title>
                            <Form.Group className="Replay-form">
                                <Form.Control type="textarea" placeholder="Replay ID" onChange={this.handleChange}/>
                            </Form.Group>
                            <div />
                            <Button className="Menu-button" onClick={this.fetchReplayData} > Analyze </Button> 
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{this.state.analyzeMessage}</small>
                        </Card.Footer>
                    </Card>
                    <Card className="Card-analyze-page">
                        <Card.Body>
                        <Card.Title>Upload a Replay</Card.Title>
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
                </CardDeck>
                <hr className="Footer-hr"/>
                <GetReplayTitle data={this.state.replayData} />
                <Ranks data={this.state.replayData} />
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

export default Analyze;