import React, {useState} from 'react';
import '../../App.css';
import './Ranks.css';
import axios from "axios";

import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Radar} from 'react-chartjs-2';

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
    const [blueId, setBlueId] = useState(null);
    const [orangeId, setOrangeId] = useState(null);

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
        if(playerBlueId !== blueId){
            setBlueId(playerBlueId);
            axios.get("/api/getranks/" + playerBluePlatform + "+" + playerBlueId).then(response => {
                const playerBlueRankString = response.data;
                const rankIndex1 = playerBlueRankString.indexOf(rankOffset1);
                const rankIndex2 = playerBlueRankString.indexOf(rankOffset2);
                const playerBlueValue = playerBlueRankString.substring(rankIndex1 + 1, rankIndex2);    
                if(playerBlueValue !== playerBlueRank){
                    setBlueValue(playerBlueValue);
                }    
            })
        }

        //get orange player's rank
        if(playerOrangeId !== orangeId){
            setOrangeId(playerOrangeId);
            axios.get("/api/getranks/" + playerOrangePlatform + "+" + playerOrangeId).then(response => {
                const playerOrangeRankString = response.data;
                const rankIndex1 = playerOrangeRankString.indexOf(rankOffset1);
                const rankIndex2 = playerOrangeRankString.indexOf(rankOffset2);
                const playerOrangeValue = playerOrangeRankString.substring(rankIndex1 + 1, rankIndex2);

                if(playerOrangeValue !== playerOrangeRank){
                    setOrangeValue(playerOrangeValue);
                }
            })
        }

        // Player ranks card and player playstyle card
        return(
            <CardDeck className="Card-deck-player-ranks">
                    <Card className="Card-player-ranks">
                        <Card.Body>
                        <Card.Title className="Card-player-ranks-title">Ranks</Card.Title>
                        <div className="Card-player-ranks-body">
                            <h1 className="Card-player-ranks-text"> {playerBlueName}: {playerBlueRank} 
                                <GetRankImage rank={playerBlueRank} />
                            </h1>
                            <h1 className="Card-player-ranks-text"> {playerOrangeName}: {playerOrangeRank}
                                <GetRankImage rank={playerOrangeRank} />
                            </h1>
                        </div> 
                        </Card.Body>
                    </Card>
                    <Card className="Card-player-ranks">
                        <Card.Body>
                        <Card.Title className="Card-player-ranks-title">Playstyle Comparison</Card.Title>
                            <GetPlayStyles data={data} />
                        </Card.Body>
                    </Card>
                </CardDeck>
        );

    }
    else{
        return(null);
    }

}

function GetPlayStyles(data){
    
    const blueData = data.data.data.data.blue.players[0];
    const orangeData = data.data.data.data.orange.players[0];
    const blueName = blueData.name;
    const orangeName = orangeData.name;

    // Aerials
    var blueHighAir = blueData.stats.movement.percent_high_air + blueData.stats.movement.percent_low_air;
    var orangeHighAir = orangeData.stats.movement.percent_high_air + orangeData.stats.movement.percent_low_air;

    const totalHighAir = blueHighAir + orangeHighAir;
    blueHighAir = (blueHighAir / totalHighAir) * 10;
    orangeHighAir = (orangeHighAir / totalHighAir) * 10;

    // Ground Play
    var blueGround = blueData.stats.movement.percent_ground;
    var orangeGround = orangeData.stats.movement.percent_ground;

    const totalGround = blueGround + orangeGround;
    blueGround = (blueGround / totalGround) * 10;
    orangeGround = (orangeGround / totalGround) * 10;

    // Offensive
    var blueOffensive = blueData.stats.positioning.percent_offensive_half;
    var orangeOffensive = orangeData.stats.positioning.percent_offensive_half;

    const totalOffensive = blueOffensive + orangeOffensive;
    blueOffensive = (blueOffensive / totalOffensive) * 10;
    orangeOffensive = (orangeOffensive / totalOffensive) * 10;
    
    // Defensive
    var blueDefensive = blueData.stats.positioning.percent_defensive_half;
    var orangeDefensive = orangeData.stats.positioning.percent_defensive_half;

    const totalDefensive = blueDefensive + orangeDefensive;
    blueDefensive = (blueDefensive / totalDefensive) * 10;
    orangeDefensive = (orangeDefensive / totalDefensive) * 10;

    const playStylesData = {
        labels: ['Aerial Play', 'Ground Play', 'Offensive', 'Defensive'],
        datasets: [
            {
                label: blueName,
                data: [blueHighAir, blueGround, blueOffensive, blueDefensive],
                borderColor: '#007eff'
            },
            {
                label: orangeName,
                data: [orangeHighAir, orangeGround, orangeOffensive, orangeDefensive],
                borderColor: '#faa41a'
            }
        ]
    };

    const playStylesOptions = {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                stepSize: 1,
                display: false
            }
        }
    };

    return(
        <Radar
            data={playStylesData}
            height={100}
            width={200}
            options={playStylesOptions}
        />
    );
}

// function GetRankImage2(r){

//     var rank;
//     const rankDist = [
//         {minRank: 149, rankImg: bronze1},
//         {minRank: 207, rankImg: bronze2},
//         {minRank: 264, rankImg: bronze3},
//         {minRank: 323, rankImg: silver1},
//         {minRank: 387, rankImg: silver2},
//         {minRank: 455, rankImg: silver3},
//         {minRank: 513, rankImg: gold1},
//         {minRank: 567, rankImg: gold2},
//         {minRank: 634, rankImg: gold3},
//         {minRank: 686, rankImg: platinum1},
//         {minRank: 746, rankImg: platinum2},
//         {minRank: 807, rankImg: platinum3},
//         {minRank: 866, rankImg: diamond1},
//         {minRank: 925, rankImg: diamond2},
//         {minRank: 987, rankImg: diamond3},
//         {minRank: 1047, rankImg: champion1},
//         {minRank: 1106, rankImg: champion2},
//         {minRank: 1167, rankImg: champion3},
//         {minRank: 1225, rankImg: grandChampion1},
//         {minRank: 1287, rankImg: grandChampion2},
//         {minRank: 1344, rankImg: grandChampion3},
//     ]

//     if(r != null){
//         console.log(r);
//         rank = parseInt(r.rank)
//     }

//     return null;
// }

function GetRankImage(r){

    var rankImg = unranked;
    var rank;

    if(r != null){
        rank = parseInt(r.rank);

        if(rank >= 0 && rank < 149){
            rankImg = bronze1;
        }
        else if(rank >= 149 && rank < 207){
            rankImg = bronze2;
        }
        else if(rank >= 207 && rank < 264){
            rankImg = bronze3;
        }
        else if(rank >= 264 && rank < 323){
            rankImg = silver1;
        }
        else if(rank >= 323 && rank < 387){
            rankImg = silver2;
        }
        else if(rank >= 387 && rank < 455){
            rankImg = silver3;
        }
        else if(rank >= 455 && rank < 513){
            rankImg = gold1;
        }
        else if(rank >= 513 && rank < 567){
            rankImg = gold2;
        }
        else if(rank >= 567 && rank < 634){
            rankImg = gold3;
        }
        else if(rank >= 634 && rank < 686){
            rankImg = platinum1;
        }
        else if(rank >= 686 && rank < 746){
            rankImg = platinum2;
        }
        else if(rank >= 746 && rank < 807){
            rankImg = platinum3;
        }
        else if(rank >= 807 && rank < 866){
            rankImg = diamond1;
        }
        else if(rank >= 866 && rank < 925){
            rankImg = diamond2;
        }
        else if(rank >= 925 && rank < 987){
            rankImg = diamond3;
        }
        else if(rank >= 987 && rank < 1047){
            rankImg = champion1;
        }
        else if(rank >= 1047 && rank < 1106){
            rankImg = champion2;
        }
        else if(rank >= 1106 && rank < 1167){
            rankImg = champion3;
        }
        else if(rank >= 1167 && rank < 1225){
            rankImg = grandChampion1;
        }
        else if(rank >= 1225 && rank < 1287){
            rankImg = grandChampion2;
        }
        else if(rank >= 1287 && rank < 1344){
            rankImg = grandChampion3;
        }
        else if(rank >= 1344){
            rankImg = supersonic;
        }

        return(
            <img className="Rank-img" alt="" src={rankImg} /> 
        )

    }
    else{
        return(null)        
    }         

}