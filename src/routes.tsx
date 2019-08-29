import * as React from "react";
import { Switch, Route } from "react-router-dom";
import StackTabs from "./Components/Commons/StackTabs";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={StackTabs} />
    </Switch>
)

export default Routes;
