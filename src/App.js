import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import {RouteWrapper} from './User/routes/RouteWrapper';
import {Home} from "./User/Home/home";
import {seeting} from "./User/Home/home";
import {acount} from "./User/Home/home";
import {Bills} from "./User/Home/home";
import {insex} from "./kitchen/Home/insex";
import {statistics} from "./kitchen/Home/insex";
import {communcation} from "./kitchen/Home/insex";

import layout from "./User/Layout/layout";
import "./App.css"
function App() {
  return (
    <Router>
    <Switch>
         <RouteWrapper path="/" exact component={Home } layout={layout}/>
         <RouteWrapper path="/seeting" exact component={seeting } layout={layout}/>
         <RouteWrapper path="/account" exact component={acount } layout={layout}/>
         <RouteWrapper path="/bills" exact component={Bills } layout={layout}/>
         <RouteWrapper path="/food" exact component={Home } layout={layout}/>
        
        {/* kitchen Dachboard */}
         <RouteWrapper path="/home" exact component={insex } layout={layout}/>
         <RouteWrapper path="/statistics" exact component={statistics } layout={layout}/>
         <RouteWrapper path="/communcation" exact component={communcation } layout={layout}/>

    </Switch>
</Router>
  );
}

export default App;
