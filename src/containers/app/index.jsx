import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionsToBind from '../../actions/mainActions.js';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



class App extends Component {
  constructor(props){
        super(props);

  }


  render() {
    
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}


const mapStateToProps = ( state ) => {
  // console.log("APP ",state)
  return{
    mainReducer: state.mainReducer,
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    actions: bindActionCreators(ActionsToBind, dispatch)
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );