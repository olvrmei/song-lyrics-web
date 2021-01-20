import React from 'react';
import './App.css';
import Search from './screens/Search';
import ErrorSearch from './screens/ErrorSearch';
import HistoryPage from './screens/HistoryPage';
import SearchResult from './screens/SearchResult';
import MusicPage from './screens/MusicPage';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/errorsearch' component={ErrorSearch} />
          <Route path='/historypage' component={HistoryPage} />
          <Route path='/searchresult' component={SearchResult} />
          <Route path='/musicpage' component={MusicPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
