import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu   } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Logo from "@images/logo.png"
import 'antd/dist/antd.less'
import './index.less'

let menuTitles=['homepage','focus','application','publications','members','facilites','album'];
let menuLinks=['index.html','focus.html','application','publications.html','members.html','facilites.html','album.html']


ReactDOM.render(
    <Layout >
    <Sider
      theme="light"

      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken:any) => {
        console.log(broken);
      }}
      onCollapse={(collapsed:any, type:any) => {
        console.log(collapsed, type);
      }}
    >
      <div className="nav" />
        <img src={Logo} id="USTClogo" alt="USTC logo" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['0']} >
          {menuTitles.map((value,index)=><Menu.Item key={index} id={value}><a href={menuLinks[index]} title={value}>{value.toUpperCase()}</a></Menu.Item>)}
        </Menu>
    </Sider>
      <Layout>
          
    <Header className="CAN shadow2" style={{ padding: 0 }} >
        <h1 style={{textAlign:'center',color:"#FFF"}}>Center of Advanced Nanocatalysis</h1>
        </Header>




        <Content style={{ margin: '24px 16px 0' }}>
          contetn
        </Content>




      <Footer style={{ textAlign: 'center' }}>Copyright © 2017 Center of Advanced Nanocatalysis. All rights reserved.</Footer>
      </Layout>
      
    </Layout>,
    document.getElementById("contain")
);
