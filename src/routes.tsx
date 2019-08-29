import * as React from "react";
import { Switch, Route } from "react-router-dom";
import StackTabs from "./Components/Commons/StackTabs";
import About from "./Components/About";
import Contribute from "./Components/Contribute";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={StackTabs} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contribute" component={Contribute} />
    </Switch>
)

export default Routes;
