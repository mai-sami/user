import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import {RouteWrapper} from './User/routes/RouteWrapper';
import {Home} from "./User/Home/home";
import {seeting} from "./User/Home/home";
import {acount} from "./User/Home/home";
import {Bills} from "./User/Home/home";

import layout from "./User/Layout/layout";

function App() {
  return (
    <Router>
    <Switch>
         <RouteWrapper path="/" exact component={Home } layout={layout}/>
         <RouteWrapper path="/seeting" exact component={seeting } layout={layout}/>
         <RouteWrapper path="/account" exact component={acount } layout={layout}/>
         <RouteWrapper path="/bills" exact component={Bills } layout={layout}/>
         <RouteWrapper path="/food" exact component={Home } layout={layout}/>

    </Switch>
</Router>
  );
}

export default App;
