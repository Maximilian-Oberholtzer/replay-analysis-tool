import React from 'react';
import '../App.css';
import './Analyze.css';
import Ranks from './Ranks'
import { Form, Button, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const token = 'YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK';

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
        console.log(event.target.files);
        if(event.target.files[0] !== undefined){
            let file = event.target.files[0];
            this.setState({file: file, fileName: event.target.files[0].name});
        }
        else{
            this.setState({fileName: 'Browse...'});
        }
        
    }

    //Post a replay to Ballchasing.com
    uploadFile = () => {
        const url = "https://ballchasing.com/api/v2/upload?visibility=public";
        let file = this.state.file;
        let formdata = new FormData();

        if(file !== null){
            formdata.append('file', file);

            axios({
                url: url,
                method: "POST",
                headers: {
                    Authorization: `${token}`,
                },
                data: formdata
            }).then((response) => {
                console.log(response);
                const id = response.data.id;
                this.setState({uploadMessage: "Success! Replay ID: " + id});
            }, (error) => {
                console.log(error);
                this.setState({uploadMessage: "File not valid or already uploaded."});
            });
        }
        else{
            console.log("file cannot be null");
            this.setState({uploadMessage: "Please select a file before uploading."});
        }

    }

    //Get replay data from Ballchasing.com
    fetchReplayData = () => { 
        const url = "https://ballchasing.com/api/replays/";
        const key = this.state.key;

        if(key !== '') {
            axios.get(url + key, {
                headers: {
                    Authorization: `${token}`
                }
            })
            .then(function (response) {
                // handle success
                // make sure the replay is solo duel
                if(response.data.team_size === 1){
                    this.setState({analyzeMessage: "Data fetch successful.", replayData: response.data});
                }
                else{
                    this.setState({analyzeMessage: "Please enter a solo duel replay."});
                }    
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
                this.setState({analyzeMessage: "Please enter a valid replay ID."});
             }.bind(this))
              .then(function () {
                 // always executed
             });
        }
        else {
            //make sure user puts in a value
            this.setState({analyzeMessage: "Replay ID field cannot be empty."});
        }
    }

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

    //sample component that returns submitted replay title
    function GetReplayTitle(data){
        if(data.data != null) {
            //console.log(data);
            const title = data.data.title.toString();
            return <h1 className="title"> Replay title: {title} </h1>;
        }
        else {
            return(null);
        }  
    }

export default Analyze;