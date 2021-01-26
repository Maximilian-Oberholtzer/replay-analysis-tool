import './App.css';
import Navigator from './components/Navigator/Navigator';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App-page"> 
        <Navigator />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={HomePage} /> 
          </Switch>
          <Footer />
      </div> 
    </Router> 
  );
}

export default App;
