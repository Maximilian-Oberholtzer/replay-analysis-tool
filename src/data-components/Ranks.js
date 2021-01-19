import React, {useState} from 'react';
import '../App.css';
import axios from "axios";

function Ranks(data){

    const url = "https://api.yannismate.de/rank/steam/";

    const [playerBlueRank, setBlueValue] = useState(null);
    const [playerOrangeRank, setOrangeValue] = useState(null);

    const rankOffset1 = "(";
    const rankOffset2 = ")";

    var playerBlueName;
    var playerOrangeName;
    
    console.log(data);
    if(data.data != null) {
        playerBlueName = data.data.blue.players[0].name;
        const playerBlueId = data.data.blue.players[0].id.id;

        //fetech rank through ID
        axios.get(url + playerBlueId, {
            
        })
        .then(function (response) {
            // handle success
            //get player blue's rank
            const playerBlueRankString = response.data;
            const rankIndex1 = playerBlueRankString.indexOf(rankOffset1);
            const rankIndex2 = playerBlueRankString.indexOf(rankOffset2);
            const playerBlueValue = playerBlueRankString.substring(rankIndex1 + 1, rankIndex2);
            setBlueValue(playerBlueValue);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
         })
          .then(function () {
             // always executed
         });

    }
    
    if(data.data != null) {
        playerOrangeName = data.data.orange.players[0].name;
        const playerOrangeId = data.data.orange.players[0].id.id;

        //fetech rank through ID
        axios.get(url + playerOrangeId, {
            
        })
        .then(function (response) {
            // handle success
             //get player orange's rank
            const playerOrangeRankString = response.data;
            const rankIndex1 = playerOrangeRankString.indexOf(rankOffset1);
            const rankIndex2 = playerOrangeRankString.indexOf(rankOffset2);
            const playerOrangeValue = playerOrangeRankString.substring(rankIndex1 + 1, rankIndex2);
            setOrangeValue(playerOrangeValue);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
         })
          .then(function () {
             // always executed
         });

    }

    if(data.data != null) {
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