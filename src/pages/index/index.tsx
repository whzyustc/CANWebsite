import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Logo from "@images/logo.png"
import './index.less'
import { Router, Route } from 'react-router';
import { Link ,HashRouter} from "react-router-dom";

import {Publications} from '@component/publications'
import {Albums} from '@component/albums'
import {Facilities} from '@component/facilities'
import {HomepageContent} from "@component/homepage";



let menuTitles=['homepage','focus','application','publications','members','facilites','album'];
let menuLinks=['','focus','application','publications','members','facilites','album']



ReactDOM.render(
    <Layout >
    <Sider
      className="shadow1"
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
        <img src={Logo} id="USTClogo" alt="USTC logo" />
        
        <HashRouter >
        <Menu theme="light" mode="inline"   defaultSelectedKeys={['0']} >
          {menuTitles.map((value,index)=>(
            <Menu.Item key={index} id={value}>
              <Link to={menuLinks[index]}>
                {value.toUpperCase()}
              </Link>
            </Menu.Item>))}
        </Menu>
        
        </HashRouter >
    </Sider>
      <Layout>
          
    <Header className="CAN shadow1" style={{ padding: 0}} >
        <h1 id="CANtitle" style={{textAlign:'center',color:"white"}}>Center of Advanced Nanocatalysis</h1>
        </Header>


        <Content style={{ margin: '24px 16px 0' }}>
          <HashRouter >
            
            <Route cache component={ HomepageContent } path="/index"/>
            <Route component={ Publications } path="/publications"/>
            <Route component={ Facilities } path="/publications"/>
            <Route component={ Albums } path="/albums"/>
            {/* <Route component={ Members } path="/members"/>
            <Route component={ Application } path="/application"/> */}
          </HashRouter>
        </Content>

        



      <Footer style={{ textAlign: 'center' }}>Copyright © 2017 Center of Advanced Nanocatalysis. All rights reserved.</Footer>
      </Layout>
      
    </Layout>,
    document.getElementById("contain")
);
