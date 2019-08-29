import React from "react";
import { Tabs, Typography } from "antd";
import ReactPeople from "../People/React";
import ReactNativePeople from "../People/ReactNative";
import AngularPeople from "../People/Angular";
import Makers from "../People/Makers";

class StackTabs extends React.Component<{}, {}> {
    render() {
        const { TabPane } = Tabs;
        const { Title } = Typography;
        return (
            <>
                <Title level={4}>People to Follow according to your stack</Title>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="React ⚛️" key="1">
                        <ReactPeople />
                    </TabPane>
                    <TabPane tab="React Native ⚛️" key="2">
                        <ReactNativePeople />
                    </TabPane>
                    <TabPane tab="Angular ⚡️" key="3">
                        <AngularPeople />
                    </TabPane>
                    <TabPane tab="Makers 🧩" key="4">
                        <Makers />
                    </TabPane>
                </Tabs>
            </>
        )
    }
}

export default StackTabs;
