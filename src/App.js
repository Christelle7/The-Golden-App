import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import ColdPress from './containers/ColdPressContainers';
import FamilyPreps from './containers/FamilyPrepsContainers';
import FarmersMarkets from './components/pages/FarmersMarkets';
import Cart from './containers/CartContainers';
import Deliveries from './containers/DeliveriesContainers';
import GoodWorks from './components/pages/GoodWorks';
import OfficeCatering from './containers/OfficeCateringContainers';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>

          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/ColdPress" component={ColdPress} />
              <Route exact path="/FamilyPreps" component={FamilyPreps} />
              <Route exact path="/FarmersMarkets" component={FarmersMarkets} />
              <Route exact path="/Deliveries" component={Deliveries} />
              <Route exact path="/GoodWorks" component={GoodWorks} />
              <Route exact path="/OfficeCatering" component={OfficeCatering} />
              <Route exact path="/Cart" component={Cart} />
            </Switch>

          </header>
        </Provider>
      </div>
    </Router>
  );
}

export default App;

