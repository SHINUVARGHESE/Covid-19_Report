import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js'
import India from './components/india.js';
import World from './components/world.js';
import {
   BrowserRouter as Router,
   Switch,
   Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <Router>
           <Header/>
              <Switch>
                 <Route exact path="/"><India/></Route>
                 <Route exact path="/india"><India/></Route>
                 <Route exact path="/world"><World/></Route>
              </Switch>
         </Router>
    </div> 
  );
}

export default App;
