import React from "react";
import { PeopleState } from "../../types/interface";
import People from "../../../data/makers";
import PeopleComponent from "../../Commons/people";

class Makers extends React.Component<{}, PeopleState> {
    state = {
        people: People
    }

    render() {
        return (
            <PeopleComponent {...this.state} />
        )
    }
}

export default Makers;
