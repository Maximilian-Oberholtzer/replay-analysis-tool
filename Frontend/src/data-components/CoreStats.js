import '../App.css';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {XYPlot, LineSeries, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

function CoreStats(data){

    var bluePlayerName;
    var orangePlayerName;
    var blueGoals;
    var orangeGoals;


    if(data.data !== null){
        console.log(data);
        let bluePlayerData = data.data.data.blue.players[0];
        let orangePlayerData = data.data.data.orange.players[0];

        bluePlayerName = bluePlayerData.name.toString();
        orangePlayerName = orangePlayerData.name.toString();
        blueGoals = bluePlayerData.stats.core.goals;
        orangeGoals = orangePlayerData.stats.core.goals;

        return (
            <div>
                <CardDeck className="Card-deck-analyze-page">
                    <Card className="Card-analyze-page">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                        <XYPlot margin={{bottom: 50}} xType="ordinal" width={300} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <VerticalBarSeries
                                data={[{x: bluePlayerName, y: blueGoals}]} color="#007eff"
                            />
                            <VerticalBarSeries
                                data={[{x: orangePlayerName, y: orangeGoals}]} color="#faa41a"
                            />
                        </XYPlot>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <hr className="Footer-hr"/>
            </div>

        )
    }
    else{
        return(null)
    }
    
}

export default CoreStats;