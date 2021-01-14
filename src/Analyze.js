import React, {Component, useContext, useState} from 'react';
import './App.css';
import './Analyze.css';
import Select from 'react-select';
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
import axios from "axios";

const token = 'YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK';

//example replay input:  f471cb81-74d5-4376-becb-368d996b5b5f

class Analyze extends React.Component {

    constructor(props){
        super(props);
        this.state = {key : '', message : ''};
    }

    handleChange = (event) => {
        this.setState({key: event.target.value});
    }

    fetchReplayData = () => { 
        const url = "https://ballchasing.com/api/replays/";
        const key = this.state.key;

        if(key != ''){
            axios.get(url + key, {
                headers: {
                    Authorization: `${token}`
                }
            })
            .then(function (response) {
                // handle success
                 console.log(response);
                 this.setState({message: "Data fetch successful."});
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
        else{
            //make sure user puts in a value
            this.setState({message: "Replay ID field cannot be empty."});
        }

    }

    //onClick={this.getReplayData}

    render(){
        return(
            <div>
                <hr />
                <h1 className="title"> Enter your replay ID: </h1>
                
                 <Form.Group className="Replay-form">
                    <Form.Control type="textarea" placeholder="Replay ID" onChange={this.handleChange}/>
                 </Form.Group>
    
                <div />
                <Button className="Menu-button" onClick={this.fetchReplayData} > Analyze </Button> 
                <hr />
                <h1 className="title"> {this.state.message} </h1>
            </div>
        );
    }
    
}

export default Analyze;