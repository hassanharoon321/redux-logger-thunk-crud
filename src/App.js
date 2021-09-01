import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
