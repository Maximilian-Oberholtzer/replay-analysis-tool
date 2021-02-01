import '../../App.css';
import './PositioningStats.css';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Radar, Bar} from 'react-chartjs-2';

function PositioningStats(data) {

    if(data.data !== null){

        // Initialize Player Data and names
        let bluePlayerData = data.data.data.blue.players[0];
        let orangePlayerData = data.data.data.orange.players[0];

        var bluePlayerName = bluePlayerData.name.toString();
        var orangePlayerName = orangePlayerData.name.toString();

        // Radar Chart Variables
        var blueDistance = bluePlayerData.stats.positioning.avg_distance_to_ball;
        var orangeDistance = orangePlayerData.stats.positioning.avg_distance_to_ball;
        let totalDistance = blueDistance + orangeDistance;

        blueDistance = (blueDistance / totalDistance) * 10;
        orangeDistance = (orangeDistance / totalDistance) * 10;

        var blueBoost = bluePlayerData.stats.boost.amount_collected;
        var orangeBoost = orangePlayerData.stats.boost.amount_collected;
        let totalBoost = blueBoost + orangeBoost;

        blueBoost = (blueBoost / totalBoost) * 10;
        orangeBoost = (orangeBoost / totalBoost) * 10;

        var blueSpeed = bluePlayerData.stats.movement.avg_speed;
        var orangeSpeed = orangePlayerData.stats.movement.avg_speed;
        let totalSpeed = blueSpeed + orangeSpeed;

        blueSpeed = (blueSpeed / totalSpeed) * 10;
        orangeSpeed = (orangeSpeed / totalSpeed) * 10;

        const positioningData = {
            labels: ['Close to ball', 'Boost Collected', 'Average Speed'],
            datasets: [
                {
                    label: bluePlayerName,
                    data: [blueDistance, blueBoost, blueSpeed],
                    borderColor: '#007eff'
                },
                {
                    label: orangePlayerName,
                    data: [orangeDistance, orangeBoost, orangeSpeed],
                    borderColor: '#faa41a'
                }
            ]
        };
    
        const positioningOptions = {
            tooltips: {
                enabled: false
            },
            scale: {
                angleLines: {
                    display: false
                },
                ticks: {
                    stepSize: 1,
                    display: false
                },
            }
        };

        // Doughnut Chart for Boost data
        let blueBoost1 = bluePlayerData.stats.boost.percent_boost_0_25;
        let blueBoost2 = bluePlayerData.stats.boost.percent_boost_25_50;
        let blueBoost3 = bluePlayerData.stats.boost.percent_boost_50_75;
        let blueBoost4 = bluePlayerData.stats.boost.percent_boost_75_100;

        let orangeBoost1 = orangePlayerData.stats.boost.percent_boost_0_25;
        let orangeBoost2 = orangePlayerData.stats.boost.percent_boost_25_50;
        let orangeBoost3 = orangePlayerData.stats.boost.percent_boost_50_75;
        let orangeBoost4 = orangePlayerData.stats.boost.percent_boost_75_100;

        const boostData = {
            labels: ['Time Spent Below 25%', 'Time Spent Above 75%'],
            datasets : [
                {
                    label: bluePlayerName,
                    data: [blueBoost1, blueBoost4],
                    backgroundColor: ['#1b8bff', '#0071e7'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderWidth: 3
                },
                {
                    label: orangePlayerName,
                    data: [orangeBoost1, orangeBoost4],
                    backgroundColor: ['#fbae33', '#f59905'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderWidth: 3
                }
            ]
        }

        const boostOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 60,
                        stepSize: 20
                    }
                }]
            }
        }

        return(
            <div>
                <h1 className="Core-stats-title">Positioning & Boost Stats</h1>
                <CardDeck className="Card-deck-positioning-stats">
                    <Card className="Card-positioning-stats">
                        <Card.Body>
                        <Card.Title className="Card-positioning-title">Positioning Comparison</Card.Title>
                            <Radar
                                data={positioningData}
                                height={100}
                                width={200}
                                options={positioningOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-positioning-stats">
                        <Card.Body>
                        <Card.Title>Boost Comparison</Card.Title>
                            <Bar
                                data={boostData}
                                height={100}
                                width={200}
                                options={boostOptions}
                            />
                        </Card.Body>
                    </Card>
                </CardDeck>
                <hr className="Footer-hr"/>
            </div>
        )

    }
    else{
        return null;
    }

}

export default PositioningStats;