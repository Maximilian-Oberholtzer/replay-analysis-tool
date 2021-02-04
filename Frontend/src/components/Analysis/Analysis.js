import '../../App.css';
import './Analysis.css';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Analysis(data) {

    if(data.data !== null){

        //console.log(data);

        let blueData = data.data.data.blue.players[0];
        let orangeData = data.data.data.orange.players[0];

        // goals
        let blueGoals = blueData.stats.core.goals;
        let orangeGoals = orangeData.stats.core.goals;

        // initialize the winning and losing player
        var winningPlayer;
        var losingPlayer;

        if(blueGoals > orangeGoals){
            winningPlayer = blueData;
            losingPlayer = orangeData;
        }
        else{
            winningPlayer = orangeData;
            losingPlayer = blueData;
        }

        // Names
        let winnerName = winningPlayer.name;
        let loserName = losingPlayer.name;

        // Amount of time in air
        //let winnerAir = winningPlayer.stats.movement.percent_high_air + winningPlayer.stats.movement.percent_low_air;
        //let loserAir = losingPlayer.stats.movement.percent_high_air + losingPlayer.stats.movement.percent_low_air;

        // Amount of time on ground
        //let winnerGround = winningPlayer.stats.movement.percent_ground;
        //let loserGround = losingPlayer.stats.movement.percent_ground;

        // Amount of time in offensive half
        let winnerOffensive = winningPlayer.stats.positioning.percent_offensive_half;
        let loserOffensive = losingPlayer.stats.positioning.percent_offensive_half;

        // Amount of time spent in defensive half
        //let winnerDefensive = winningPlayer.stats.positioning.percent_defensive_half;
        //let loserDefensive = losingPlayer.stats.positioning.percent_defensive_half;

        // Distance to the ball
        let winnerDistance = winningPlayer.stats.positioning.avg_distance_to_ball;
        let loserDistance = losingPlayer.stats.positioning.avg_distance_to_ball;

        // Amount boost collected
        let winnerBoost = winningPlayer.stats.boost.amount_collected;
        let loserBoost = losingPlayer.stats.boost.amount_collected;

        // Speed
        //let winnerSpeed = winningPlayer.stats.movement.avg_speed;
        //let loserSpeed = losingPlayer.stats.movement.avg_speed;

        // Shot percentage
        //let winnerShotTotal = winningPlayer.stats.core.shots;
        //let loserShotTotal = losingPlayer.stats.core.shots;
        //let winnerShotPercentage = winningPlayer.stats.core.shooting_percentage;
        //let loserShotPercentage = losingPlayer.stats.core.shooting_percentage;


        // Build out the analysis summary
        var winnerAttributes = "";

        if(winnerOffensive > loserOffensive){
            //winning player was on offense more
            winnerAttributes += "1";

            if(winnerDistance > loserDistance){
                //winning player was generally further away from the ball
                winnerAttributes += "A";
            }
            else{
                //winning Player was generally closer to the ball
                winnerAttributes += "B";
            }
            if(winnerBoost > loserBoost){
                //winning player collected more boost
                winnerAttributes += "C";
            }
            else{
                //winning player collected less boost
                winnerAttributes += "D";
            }
        }
        else{
            //winning player was on defense more
            winnerAttributes += "2";

            if(winnerDistance > loserDistance){
                //winning player was generally further away from the ball
                winnerAttributes += "A";
            }
            else{
                //winning Player was generally closer to the ball
                winnerAttributes += "B";
            }
            if(winnerBoost > loserBoost){
                //winning player collected more boost
                winnerAttributes += "C";
            }
            else{
                //winning player collected less boost
                winnerAttributes += "D";
            }
        }

        //check # of shots and shot percentages

        var predictedSummary;

        // Make Statement based on attributes
        if(winnerAttributes === "1AC"){
            predictedSummary = winnerName + " won the game with solid offensive pressure and boost control. " + 
                                loserName + " likely made several unfavorable challenges while playing tight defense and could not generate enough scoring opportunities." 
        }
        if(winnerAttributes === "1AD"){
            predictedSummary = winnerName + " won the game with solid offensive pressure and shot accuracy. " + 
                                loserName + " was likely in control for most of the game but was unsuccessful with defensive challenges and missed several scoring opportunities." 
        }
        if(winnerAttributes === "1BC"){
            predictedSummary = winnerName + " won the game with solid offensive pressure, ball control and boost control. " + 
                                loserName + " was likely unsuccessful maintaining ball possession, was overwhelmed with threatening shots and could not generate enough scoring opportunities." 
        }
        if(winnerAttributes === "1BD"){
            predictedSummary = winnerName + " won the game with solid offensive pressure and ball control. " + 
                                loserName + " likely had boost over ball decision making which gave the opponent too much space to generate scoring opportunities."; 
        }
        if(winnerAttributes === "2AC"){
            predictedSummary = winnerName + " won the game with strong counterattacks and boost control. " + 
                                loserName + " likely missed several scoring opportunities despite having more ball control.";
        }
        if(winnerAttributes === "2AD"){
            predictedSummary = winnerName + " won the game with strong counterattacks and decision making. " + 
                                    loserName + " was likely in control for most of the game but missed several scoring opportunities despite having boost and ball control.";
        }
        if(winnerAttributes === "2BC"){
            predictedSummary = winnerName + " won the game with strong counterattacks and ball control. " + 
                                loserName + " likely struggled with maintaining offensive possession and was overwhelmed by the opponent's tight defense."; 
        }
        if(winnerAttributes === "2BD"){
            predictedSummary = winnerName + " won the game with strong counterattacks and tight defensive play. " + 
                                loserName + " likely missed several scoring opportunities despite being more agressive and having boost advantage." 
        }


        // Analysis summary render
        if(blueGoals !== orangeGoals){
            return(
                <div>
                    <h1 className="Analysis-title">
                        Analysis
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 100, hide: 400 }}
                            overlay={<Tooltip id="button-tooltip">
                                        Based on available data
                                     </Tooltip>}
                        >
                            <Button className="Analysis-button">?</Button>
                        </OverlayTrigger>
                    </h1>
                    <Card className="Card-analysis">
                        {predictedSummary}
                    </Card>
                </div>
            )
        }
        else{
            return null;
        }


    }

    return null;
}

export default Analysis;