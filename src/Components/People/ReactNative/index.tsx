import React from "react";
import { PeopleState } from "../../types/interface";
import People from "../../../data/reactNative";
import PeopleComponent from "../../Commons/people";

class ReactNativePeople extends React.Component<{}, PeopleState> {
    state = {
        people: People
    }

    render() {
        return (
            <PeopleComponent {...this.state} />
        )
    }
}

export default ReactNativePeople;
