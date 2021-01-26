import '../../App.css';
import './CoreStats.css';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bar} from 'react-chartjs-2';

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

        const goalsData = {
            labels: [bluePlayerName, orangePlayerName],
            datasets: [
                {
                    label: 'Goals',
                    data: [blueGoals, orangeGoals],
                    backgroundColor: ['#007eff','#faa41a'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderRadius: '10px',
                    borderWidth: 3
                }
            ]
        }

        const goalsDataOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

        return (
            <div>
                <CardDeck className="Card-deck-core-stats">
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className="Card-deck-core-stats">
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={goalsDataOptions}
                            />
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