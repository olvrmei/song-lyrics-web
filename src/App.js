import React from 'react';
import SearchPage from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';
import HistoryPage from './pages/HistoryPage';
import ResultPage from './pages/ResultPage';
import MusicPage from './pages/MusicPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/errorsearch" component={ErrorPage} />
        <Route path="/historypage" component={HistoryPage} />
        <Route path="/searchresult" component={ResultPage} />
        <Route path="/musicpage" component={MusicPage} />
      </Switch>
    </Router>
  );
}

export default App;
