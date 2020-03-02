import React from 'react';
import './App.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Header from './components/template/header';
import Footer from './components/template/footer';
import NotFound from './components/template/notfound';
import SongList from './components/songs/SongList';
import ViewSong from './components/songs/ViewSong';
import Home from './components/pages/Home';
import CreateSong from './components/songs/CreateSong';
import SongWriting101 from './components/pages/Songwriting101';
import 'typeface-roboto';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const App: React.FC = () => {

  /**
   * Here's color pallette
   * @link https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=757575&secondary.color=ff8a80&primary.text.color=ffffff&secondary.text.color=000000
   */
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        "main": "#757575",
        "light" : "#a4a4a4",
        "dark" : "#494949",
        "contrastText" : "#ffffff"
      },
      secondary: {
        "main": "#ff8a80",
        "light" : "#ffbcaf",
        "dark" : "#c85a54",
        "contrastText" : "#000000"
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
                    <Route path="/songwriting101" component={SongWriting101} />
                    <Route component={NotFound} />
                  </Switch>
              </Grid>
            </Grid>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
