import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/detail/:email'>
            <Detail></Detail>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
