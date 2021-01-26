import './App.css';
import Navigator from './main-components/Navigator';
import Footer from './main-components/Footer';
import About from './main-components/About';
import Analyze from './data-components/Analyze';
import HomePage from './main-components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App-page"> 
        <Navigator />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={HomePage} /> 
            <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route path={process.env.PUBLIC_URL + '/analyze'} component={Analyze} />
          </Switch>
          <Footer />
      </div> 
    </Router> 
  );
}

export default App;
