import React from "react";
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component<{}, {}> {
    render() {
        const { Header } = Layout;
        return (
            <Layout>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <NavLink to="/">
                                😁 People
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <NavLink to="/about">
                            ℹ️ About
                        </NavLink></Menu.Item>
                        <Menu.Item key="3">
                        <NavLink to="/contribute">
                            🤗 Contribute
                        </NavLink></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default Navbar;
