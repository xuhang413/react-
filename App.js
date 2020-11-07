import logo from './logo.svg';
import './App.css';
import React from 'react'
// 导入路由相关页面
import Home from './compoments/home/Home.jsx'
import Movie from './compoments/movie/Movie.jsx'
import About from './compoments/about/About.jsx'
//导入路由组件
import {HashRouter,Route,Link}from 'react-router-dom'

import { Layout, Menu} from 'antd';
const { Header, Content, Footer } = Layout;

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return  <HashRouter>
    <Layout className="layout" >

    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]}>
        <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
        <Menu.Item key="movie"><Link to="/movie/in_therters/1">电影</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
      </Menu>
    </Header>

    <Content style={{backgroundColor:"#fff"}}>
      
     <Route path="/home"component={Home}></Route>
     <Route path="/about"component={About}></Route>
     <Route path="/movie"component={Movie}></Route>
    </Content>

    <Footer style={{ textAlign: 'center' }}>航宇电影</Footer>
  </Layout>
  </HashRouter>
    
  }
}
