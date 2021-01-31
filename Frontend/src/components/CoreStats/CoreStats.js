import '../../App.css';
import './CoreStats.css';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bar} from 'react-chartjs-2';

function CoreStats(data){

    if(data.data !== null){
        console.log(data);
        let bluePlayerData = data.data.data.blue.players[0];
        let orangePlayerData = data.data.data.orange.players[0];

        let bluePlayerName = bluePlayerData.name.toString();
        let orangePlayerName = orangePlayerData.name.toString();
        
        let blueGoals = bluePlayerData.stats.core.goals;
        let orangeGoals = orangePlayerData.stats.core.goals;
        let blueSaves = bluePlayerData.stats.core.saves;
        let orangeSaves = orangePlayerData.stats.core.saves;
        let blueShots = bluePlayerData.stats.core.shots;
        let orangeShots = orangePlayerData.stats.core.shots;
        let blueDemos = bluePlayerData.stats.demo.inflicted;
        let orangeDemos = orangePlayerData.stats.demo.inflicted;

        // GOALS
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

        // SAVES
        const savesData = {
            labels: [bluePlayerName, orangePlayerName],
            datasets: [
                {
                    label: 'Saves',
                    data: [blueSaves, orangeSaves],
                    backgroundColor: ['#007eff','#faa41a'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderRadius: '10px',
                    borderWidth: 3
                }
            ]
        }

        // SHOTS
        const shotsData = {
            labels: [bluePlayerName, orangePlayerName],
            datasets: [
                {
                    label: 'Shots',
                    data: [blueShots, orangeShots],
                    backgroundColor: ['#007eff','#faa41a'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderRadius: '10px',
                    borderWidth: 3
                }
            ]
        }

        // DEMOS
        const demosData = {
            labels: [bluePlayerName, orangePlayerName],
            datasets: [
                {
                    label: 'Demos',
                    data: [blueDemos, orangeDemos],
                    backgroundColor: ['#007eff','#faa41a'],
                    borderColor: ['rgb(10, 10, 10)', 'rgb(10, 10, 10)'],
                    borderRadius: '10px',
                    borderWidth: 3
                }
            ]
        }


        const coreDataOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }]
            }
        }

        return (
            <div>
                <h1 className="Core-stats-title">Core Stats</h1>
                <CardDeck className="Card-deck-core-stats">
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Goals</Card.Title>
                            <Bar
                                data={goalsData}
                                height={400}
                                width={600}
                                options={coreDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Saves</Card.Title>
                            <Bar
                                data={savesData}
                                height={400}
                                width={600}
                                options={coreDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Shots</Card.Title>
                            <Bar
                                data={shotsData}
                                height={400}
                                width={600}
                                options={coreDataOptions}
                            />
                        </Card.Body>
                    </Card>
                    <Card className="Card-core-stats">
                        <Card.Body>
                        <Card.Title>Demos</Card.Title>
                            <Bar
                                data={demosData}
                                height={400}
                                width={600}
                                options={coreDataOptions}
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