import React from 'react';
import './App.css';
import Search from './pages/Search';
import ErrorSearch from './pages/ErrorSearch';
import HistoryPage from './pages/HistoryPage';
import SearchResult from './pages/SearchResult';
import MusicPage from './pages/MusicPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/errorsearch" component={ErrorSearch} />
          <Route path="/historypage" component={HistoryPage} />
          <Route path="/searchresult" component={SearchResult} />
          <Route path="/musicpage" component={MusicPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
