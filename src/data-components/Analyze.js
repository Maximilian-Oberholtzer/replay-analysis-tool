import React from 'react';
import '../App.css';
import './Analyze.css';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

const token = 'YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK';

//example replay input:  f471cb81-74d5-4376-becb-368d996b5b5f

class Analyze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {key : '', message : '', replayData: null};
    }

    handleChange = (event) => {
        this.setState({key: event.target.value});
    }

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
                <h1 className="title"> Enter your replay ID: </h1>
                 <Form.Group className="Replay-form">
                    <Form.Control type="textarea" placeholder="Replay ID" onChange={this.handleChange}/>
                 </Form.Group>
                <div />
                <Button className="Menu-button" onClick={this.fetchReplayData} > Analyze </Button> 
                <hr className="Header-hr"/>
                <h1 className="title"> {this.state.message} </h1>
                <GetReplayTitle data={this.state.replayData} />
                <GetRanks data={this.state.replayData} />
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

    function GetRanks(data){

        const url = "https://api.yannismate.de/rank/steam/"
        
        console.log(data);
        if(data.data != null) {
            const playerBlueName = data.data.blue.players[0].name;
            const playerOrangeName = data.data.orange.players[0].name;
            const playerBlueId = data.data.blue.players[0].id.id;
            const playerOrangeId = data.data.orange.players[0].id.id;

            var playerBlueRank;
            var playerOrangeRank;

            const rankOffset1 = "(";
            const rankOffset2 = ")";
            var rankIndex1;
            var rankIndex2;

            var playerBlueRankString;

            //fetech rank through ID
            axios.get(url + playerBlueId, {
                
            })
            .then(function (response) {
                // handle success
                console.log("Successfully got player blue's rank data!")
                console.log(response);
                playerBlueRankString = response.data;
                console.log(playerBlueRankString);
                rankIndex1 = playerBlueRankString.indexOf(rankOffset1);
                rankIndex2 = playerBlueRankString.indexOf(rankOffset2);
                playerBlueRank = playerBlueRankString.substring(rankIndex1 + 1, rankIndex2);
                console.log(playerBlueRank);
                // console.log(rankIndex1);
                // console.log(rankIndex2);

                
            }.bind(this))
            .catch(function (error) {
                // handle error
                console.log(error);
             }.bind(this))
              .then(function () {
                 // always executed
             });

        }      

        return(null);
    }

export default Analyze;