import React, {useState} from 'react';
import '../../App.css';
import axios from "axios";

function Ranks(data){

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
            <div>
                <h1 className="title"> {playerBlueName}'s Rank: {playerBlueRank} </h1>
                <h1 className="title"> {playerOrangeName}'s Rank: {playerOrangeRank} </h1>
                <hr className="Footer-hr"/>
            </div>
        ); 

    }
    else{
        return(null);
    }

}

export default Ranks;