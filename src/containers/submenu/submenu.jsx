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

import store from '../../store.js';


class SubMenu extends Component {
  constructor(props){
        super(props);

        this.state = {
          selectedHeaderMenu: "/menu1/submenu1"
        }

        this.HeaderMenu = this.HeaderMenu.bind(this);
        this.handleSelectHeaderMenu = this.handleSelectHeaderMenu.bind(this);
  }

  componentDidMount(){
    const { actions,
            router } = this.props;

    //   store.dispatch(push(this.state.selectedHeaderMenu));
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
      console.log("router path= ", path);
    }

    return  ( 
      <Menu
          theme="dark"
          mode="inline"
          style={{ height: '100%' }}
          onSelect={ this.handleSelectHeaderMenu } 
      >
				{
					TABS.map( tab => {
						if(path.startsWith(tab.path)) {
							console.log("tab.path= ", tab.path);
							return tab.submenu.map( (menu, index) => {
								return <Menu.Item key={menu.path}>{menu.title}</Menu.Item>
							})
						}
					})
				}
      </Menu>
    );
  }

  
  render() {
    const { actions, 
            mainReducer,
            router } = this.props;

    

    return (
      <div>
        {this.HeaderMenu()}
      </div>
       
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

export default connect( mapStateToProps, mapDispatchToProps )( SubMenu );