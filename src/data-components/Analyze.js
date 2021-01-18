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
        this.state = {key : '', message : '', replayData: null, fileName: 'Browse...', file: null};
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
            }, (error) => {
                console.log(error);
            });
        }
        else{
            console.log("file cannot be null");
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
                 this.setState({message: "Data fetch successful.", replayData: response.data});
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
                this.setState({message: "Please enter a valid replay ID."});
             }.bind(this))
              .then(function () {
                 // always executed
             });
        }
        else {
            //make sure user puts in a value
            this.setState({message: "Replay ID field cannot be empty."});
        }
    }

    render(){
        return(
            <div>
                <hr className="Header-hr"/>
                <CardDeck className="Card-deck">
                    <Card className="Card">
                        <Card.Body>
                        <Card.Title>Enter your replay ID</Card.Title>
                            <Form.Group className="Replay-form">
                                <Form.Control type="textarea" placeholder="Replay ID" onChange={this.handleChange}/>
                            </Form.Group>
                            <div />
                            <Button className="Menu-button" onClick={this.fetchReplayData} > Analyze </Button> 
                        </Card.Body>
                    </Card>
                    <Card className="Card">
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
                    </Card>
                </CardDeck>
                <hr className="Footer-hr"/>
                <h1 className="title"> {this.state.message} </h1>
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