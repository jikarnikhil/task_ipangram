import './App.css';
import Form from './component/Form'
import NewComp from './component/NewComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/newcomp" component={NewComp} />

      <br/>
      <br/>
      <NewComp />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
