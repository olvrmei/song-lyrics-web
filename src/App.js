import React from 'react';
import Search from './pages/Search';
import ErrorSearch from './pages/ErrorSearch';
import HistoryPage from './pages/HistoryPage';
import SearchResult from './pages/SearchResult';
import MusicPage from './pages/MusicPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/errorsearch" component={ErrorSearch} />
        <Route path="/historypage" component={HistoryPage} />
        <Route path="/searchresult" component={SearchResult} />
        <Route path="/musicpage" component={MusicPage} />
      </Switch>
    </Router>
  );
}

export default App;
