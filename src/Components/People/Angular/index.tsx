import React from "react";
import { PeopleState } from "../../types/interface";
import People from "../../../data/angular";
import PeopleComponent from "../../Commons/people";

class AngularPeople extends React.Component<{}, PeopleState> {
    state = {
        people: People
    }

    render() {
        return (
            <PeopleComponent {...this.state} />
        )
    }
}

export default AngularPeople;
