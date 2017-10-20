import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Card, Row, Col } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <section>
        <Row>
          <Col span={16} offset={4}>
            <Card style={{ width: "100%" }}>
              <h3>React Redux template</h3>
              <p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
              </p>
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}


