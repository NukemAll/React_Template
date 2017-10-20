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
              <h3>Test 1</h3>
              <p>{"Inhalt 1"}
              </p>
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
}


