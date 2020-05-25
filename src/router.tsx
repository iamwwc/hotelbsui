import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import User from './components/user';
import Consumer from './components/consumer';
import Home from './components/home'
import Staff from './components/staff';
import Room from './components/room';
import Login from './components/login'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default connect()(class extends React.Component {
  state = {
    collapsed: false,
    hasLogined: false
  };

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  setLogin(l: boolean) {
    this.setState({
      ...this.state,
      hasLogined: l
    })
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            {
              !this.state.hasLogined ? (
                <Login cb={(c) => this.setLogin(c)}></Login>
              ) : (
                  <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{
                      background: '#304156'
                    }}>
                      <div className="logo" />
                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{
                        userSelect: 'none',
                        paddingTop: '64px'
                      }} selectedKeys={[window.location.pathname]}>
                        <Menu.Item key="/">
                          <Link to="/">
                            <PieChartOutlined />
                            <span>主页</span>
                          </Link>
                        </Menu.Item>
                        <SubMenu
                          key="/user"
                          title={
                            <span>
                              <Link to="/user" style={{
                                display: 'block'
                              }}>
                                <PieChartOutlined />
                                <span>用户</span>
                              </Link>
                            </span>
                          }
                        >
                          <Menu.Item key="/user/consumers">
                            <Link to="/user/consumers">
                              <PieChartOutlined />
                              <span>入住旅客</span>
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="/user/staffs">
                            <Link to="/user/staffs">
                              <PieChartOutlined />
                              <span>酒店员工</span>
                            </Link>
                          </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/room">
                          <Link to="/room">
                            <PieChartOutlined />
                            <span>房间类型</span>
                          </Link>
                        </Menu.Item>
                      </Menu>
                    </Sider>
                    <Layout className="site-layout">
                      <Header className="site-layout-background" style={{ padding: 0 }} />
                      <Content className="display-content" style={{ margin: '0 16px' }}>
                        <Switch>
                          <Route path="/user" component={User} exact></Route>
                          <Route path="/user/consumers" exact component={Consumer}></Route>
                          <Route path="/user/staffs" exact component={Staff}></Route>
                          <Route path="/" exact component={Home}></Route>
                          <Route path="/room" component={Room}></Route>
                        </Switch>
                      </Content>
                      <Footer style={{ textAlign: 'center' }}>Created by wuweichao</Footer>
                    </Layout>
                  </Layout>
                )
            }
          </React.Fragment>
        </Router>
      </React.Fragment >
    );
  }
})

export function userIsLogin(): boolean {
  if (document.cookie.indexOf("jwt_token") !== -1) {
    return true
  }
  return false
}

export function useLogin(): any {
  const [login, setLogin] = useState(false)
}