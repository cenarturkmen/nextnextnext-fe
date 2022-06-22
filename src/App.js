import {theme} from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Explore from './pages/Explore/Explore';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-nft" component={Create} />
            <Route path="/explore" component={Explore} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </ThemeProvider>
      ,
    </div>
  );
}

export default App;
