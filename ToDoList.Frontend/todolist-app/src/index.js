import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Layout, Row, Col } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ToDo } from "./components/ToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <Header></Header>
      <Content>
        <Row>
          <Col span={12} offset={6} className="todo">
            <ToDo />
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
