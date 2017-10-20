import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionsToBind from '../../actions/mainActions.js';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { ConnectedRouter, push } from 'react-router-redux';
import { Redirect, Switch, Route } from 'react-router';
import { history } from '../../middleware/router';

import { TABS } from '../../constants/navigation';
// import { MENUTABS } from '../menu/menu1.jsx'

import Home from '../../components/home/index.jsx'

import store from '../../store.js';


class App extends Component {
  constructor(props){
        super(props);

        this.state = {
          selectedHeaderMenu: "/home"
        }

        this.HeaderMenu = this.HeaderMenu.bind(this);
        this.handleSelectHeaderMenu = this.handleSelectHeaderMenu.bind(this);

        this.ContentRoutes = this.ContentRoutes.bind(this);
        this.SiderRoutes = this.SiderRoutes.bind(this);


        const { actions, mainReducer } = this.props;
        actions.test();
  }

  componentDidMount(){
    const { actions,
            router } = this.props;

      store.dispatch(push(this.state.selectedHeaderMenu));
  }

  //
  // Header
  //
  handleSelectHeaderMenu(e) {
    // console.log(e);
    store.dispatch(push(e.key));
  }

  HeaderMenu() {
    const { actions,
            router } = this.props;

    let path = "";
    if(router.location != null) {
      path = router.location.pathname;
      // console.log("router path= ", path);
    }

    return  ( 
      <Menu
          theme="dark"
          mode="horizontal"
          style={{ height: '100%' }}
          defaultSelectedKeys={[this.state.selectedHeaderMenu]}
          onSelect={ this.handleSelectHeaderMenu } 
      >
          {
            TABS.map( tab => {
              return <Menu.Item key={tab.path}>{tab.title}</Menu.Item>
            })
          }
      </Menu>
    );
  }

  //
  // Content
  //
  ContentRoutes() {
    return (
      <Layout > 
        <ConnectedRouter history={history}>
          <Switch>
            {
              TABS.map( (tab, index) => {
                return <Route key={index} exact path={tab.path} component={tab.componentContent}/>
              })
            }
            {
              TABS.map( (tab) => {
                return tab.submenu.map( (menu, index) => {
                  return <Route key={index} exact path={menu.path} component={menu.componentContent}/>
                })
              })
            }
           </Switch>
        </ConnectedRouter>
      </Layout>
    )
  }

  //
  // Sider
  //
  SiderRoutes() {
    return (
      <Layout > 
        <ConnectedRouter history={history}>
          <Switch>
            {
              TABS.map( (tab, index) => {
                return <Route key={index} path={tab.path} component={tab.componentSider}/>
              })
            }
           </Switch>
        </ConnectedRouter>
      </Layout>
    )
  }



  render() {
    const { actions, 
            mainReducer,
            router } = this.props;

    

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {this.HeaderMenu()}
        </Header>
        <Layout>
          <Sider>
            {this.SiderRoutes()}
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              {this.ContentRoutes()}
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Footer
        </Footer>

      </Layout>
    );
  }
}


const mapStateToProps = ( state ) => {
  // console.log("APP ",state)
  return{
    mainReducer: state.mainReducer,
    router: state.router  
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    actions: bindActionCreators(ActionsToBind, dispatch)
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App );