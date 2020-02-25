import React from 'react';
import './App.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Header from './components/template/header';
import Footer from './components/template/footer';
import NotFound from './components/template/notfound';
import SongList from './components/songs/SongList';
import SongForm from './components/songs/SongForm';
import ViewSong from './components/songs/ViewSong';
import Home from './components/pages/Home';
import CreateSong from './components/songs/CreateSong';

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Header />
        <br/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          >
            <Grid item xs={12}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/songs" component={SongList} />
                  <Route path="/new/:template" component={CreateSong} />
                  <Route path="/song/:id" component={ViewSong} />
                  <Route component={NotFound} />
                </Switch>
            </Grid>
          </Grid>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
