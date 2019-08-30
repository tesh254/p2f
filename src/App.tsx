import React from 'react';
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Commons/Navbar";
import Routes from "./routes";
import './App.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const { Footer } = Layout;

  return (
    <BrowserRouter>
      <div className="section">
        <Nav />
        <div className="container">
          <Routes />
        </div>
        <Footer style={{ textAlign: 'center' }}>
          Made with <span role="img" aria-labelledby="heart emoji">❤️</span> by Erick Wachira  {
            new Date().getFullYear()
          }
        </Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
