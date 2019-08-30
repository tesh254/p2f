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
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <NavLink to="/"><b>
                                <Icon type="twitter" />P2F</b>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/about">
                                <span role="img" aria-labelledby="info emoji">ℹ️</span> About
                        </NavLink></Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/contribute">
                                <span role="img" aria-labelledby="blush hug emoji">🤗</span> Contribute
                        </NavLink></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

export default Navbar;
