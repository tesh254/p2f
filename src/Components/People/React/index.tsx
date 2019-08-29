import React from "react";
import { PeopleState }  from "../../types/interface";
import People from "../../../data/react";
import PeopleComponent from "../../Commons/people";

class ReactPeople extends React.Component<{}, PeopleState> {
    state = {
        people: People
    }

    render () {
        return (
            <PeopleComponent {...this.state} />
        )
    }
}

export default ReactPeople;
