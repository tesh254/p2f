import React from 'react';
import StackTabs from "./Components/Commons/StackTabs";
import { Typography } from "antd";
import './App.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const { Title } = Typography;

  return (
    <div className="section">
      <div className="container">
        <Title level={4}>People to Follow according to your stack</Title>
        <StackTabs />
      </div>
    </div>
  );
}

export default App;
