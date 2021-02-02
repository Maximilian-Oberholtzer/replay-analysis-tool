import '../../App.css';
import './Analysis.css';
import { CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Analysis(data) {

    if(data.data !== null){

        let bluePlayerData = data.data.data.blue.players[0];
        let orangePlayerData = data.data.data.orange.players[0];

        let bluePlayerName = bluePlayerData.name.toString();
        let orangePlayerName = orangePlayerData.name.toString();

    }

    return null;
}

export default Analysis;