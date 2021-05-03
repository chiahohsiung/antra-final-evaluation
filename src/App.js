import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { Switch, Route} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
