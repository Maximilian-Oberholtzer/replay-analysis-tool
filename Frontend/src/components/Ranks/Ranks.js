import React, {useState} from 'react';
import '../../App.css';
import './Ranks.css';
import axios from "axios";

import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import bronze1 from '../../resources/Bronze1.png';
import bronze2 from '../../resources/Bronze2.png';
import bronze3 from '../../resources/Bronze3.png';
import silver1 from '../../resources/Silver1.png';
import silver2 from '../../resources/Silver2.png';
import silver3 from '../../resources/Silver3.png';
import gold1 from '../../resources/Gold1.png';
import gold2 from '../../resources/Gold2.png';
import gold3 from '../../resources/Gold3.png';
import platinum1 from '../../resources/Platinum1.png';
import platinum2 from '../../resources/Platinum2.png';
import platinum3 from '../../resources/Platinum3.png';
import diamond1 from '../../resources/Diamond1.png';
import diamond2 from '../../resources/Diamond2.png';
import diamond3 from '../../resources/Diamond3.png';
import champion1 from '../../resources/Champion1.png';
import champion2 from '../../resources/Champion2.png';
import champion3 from '../../resources/Champion3.png';
import grandChampion1 from '../../resources/Grand_champion1.png';
import grandChampion2 from '../../resources/Grand_champion2.png';
import grandChampion3 from '../../resources/Grand_champion3.png';
import supersonic from '../../resources/Supersonic.png';
import unranked from '../../resources/Unranked.png';

    export default function Ranks(data){

    const [playerBlueRank, setBlueValue] = useState(null);
    const [playerOrangeRank, setOrangeValue] = useState(null);

    const rankOffset1 = "(";
    const rankOffset2 = ")";

    var playerBlueName;
    var playerOrangeName;

    if(data.data != null){
        playerBlueName = data.data.data.blue.players[0].name;
        playerOrangeName = data.data.data.orange.players[0].name;
        var playerBluePlatform = data.data.data.blue.players[0].id.platform;
        var playerOrangePlatform = data.data.data.orange.players[0].id.platform;
        var playerBlueId = data.data.data.blue.players[0].id.id;    
        var playerOrangeId = data.data.data.orange.players[0].id.id;

        //check platform
        if(playerBluePlatform.substring(0, 1) === "p"){
            playerBluePlatform = "ps";
        }
        if(playerOrangePlatform.substring(0, 1) === "p"){
            playerOrangePlatform = "ps";
        }

        if(playerBluePlatform.substring(0, 1) === "x"){
            playerBlueId = playerBlueName;
        }
        if(playerOrangePlatform.substring(0, 1) === "x"){
            playerOrangeId = playerOrangeName;
        }

        //get blue player's rank
        axios.get("/api/getranks/" + playerBluePlatform + "+" + playerBlueId).then(response => {
            const playerBlueRankString = response.data;
            const rankIndex1 = playerBlueRankString.indexOf(rankOffset1);
            const rankIndex2 = playerBlueRankString.indexOf(rankOffset2);
            const playerBlueValue = playerBlueRankString.substring(rankIndex1 + 1, rankIndex2);
            setBlueValue(playerBlueValue);
        })

        //get orange player's rank
        axios.get("/api/getranks/" + playerOrangePlatform + "+" + playerOrangeId).then(response => {
            const playerOrangeRankString = response.data;
            const rankIndex1 = playerOrangeRankString.indexOf(rankOffset1);
            const rankIndex2 = playerOrangeRankString.indexOf(rankOffset2);
            const playerOrangeValue = playerOrangeRankString.substring(rankIndex1 + 1, rankIndex2);
            setOrangeValue(playerOrangeValue);

        })

        return(
            <CardDeck className="Card-deck-player-ranks">
                    <Card className="Card-player-ranks">
                        <Card.Body>
                        <Card.Title className="Card-player-ranks-title">Ranks</Card.Title>
                        <h1 className="title"> {playerBlueName}: {playerBlueRank} 
                            <img className="Rank-img" alt="" src={bronze1} /> 
                        </h1>
                        <h1 className="title"> {playerOrangeName}: {playerOrangeRank} </h1>
                        </Card.Body>
                    </Card>
                    <Card className="Card-player-ranks">
                        <Card.Body>
                        <Card.Title className="Card-player-ranks-title">Predicted Playstyle</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
        );

    }
    else{
        return(null);
    }

}