import React from "react";
import { Tabs } from "antd";
import ReactPeople from "../People/React";
import ReactNativePeople from "../People/ReactNative";
import AngularPeople from "../People/Angular";

class StackTabs extends React.Component<{}, {}> {
    render() {
        const { TabPane } = Tabs;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="React" key="1">
                    <ReactPeople />
                </TabPane>
                <TabPane tab="React Native" key="2">
                    <ReactNativePeople />
                </TabPane>
                <TabPane tab="Angular" key="3">
                    <AngularPeople />
                </TabPane>
            </Tabs>
        )
    }
}

export default StackTabs;
