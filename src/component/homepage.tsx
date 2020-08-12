import React from "react";
import { Row, Col ,Divider,Card} from "antd";
import { Carousel } from 'antd';
import {blue,orange,grey} from '@ant-design/colors';
import Meta from "antd/lib/card/Meta";

import {RightOutlined ,LeftOutlined} from '@ant-design/icons'


export class HomepageContent extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return <>
        <Divider orientation="left">HomePage</Divider>
        <Carousel className="homepagecarousel" dots={true}  arrows={true} autoplay>

          <Card hoverable className="carouselcard" cover={<div className="carouselimgbox"><img src="images/indexfocus1.png" alt="indexfoucus1"/></div>} ><Meta style={{textAlign:"center"}} title="发展精准合成方法学" description="Development of precise synthetic methodology"></Meta></Card>
          <Card hoverable className="carouselcard" cover={<div className="carouselimgbox"><img src="images/indexfocus2.png" alt="indexfoucus2"/></div>} ><Meta style={{textAlign:"center"}} title="深度揭示催化机理" description="In-depth understanding of catalytic mechanism"></Meta></Card>
          <Card hoverable className="carouselcard2" cover={<div className="carouselimgbox"><img src="images/indexfocus3.png" alt="indexfoucus3"/></div>} ><Meta style={{textAlign:"center"}} title="高效催化应用探索" description="Exploration of efficient catalytic systems"></Meta></Card>
          
          
         </Carousel>

         
        <Card hoverable id="contactinformation">

            <Divider orientation="left">Contact information</Divider>
            
            <Row gutter={16} align="top" justify="space-around">
            <Col span={8} style={{minWidth:"300px"}}><Card id="ccfimg"><img src="images/wyn.png" title="wuyuen"/><Meta title="Yuen Wu" ></Meta></Card>
            </Col>
            <Col span={12} ><ul>
                <li>Education:2005.09–2009.07 B.S. Tsinghua University                </li>
                <li> 2009.07–2014.07 Ph.D. Tsinghua University                </li>
                <li>Tel:  <a href="tel:0551-63601600">0551-63601600 (work)</a></li>
                <li><a href="mailto:yuenwu@ustc.edu.cn">E-mail: yuenwu@ustc.edu.cn</a> </li>
                <li>96 Jinzhai Road, Hefei, Anhui 230026, P.R. China </li>
                <li><a href="www.linkaway.com">www.linkaway.com</a></li>

                {/* <li><img src="images/hx.png" title="hongxun">Xun Hong</li>
                <li>Tel: +86-13966670058(Cell); 0551-63601600 (work)</li>
                <li>
                    Education:</br>2000–2004
                    B.S. USTC</br></br>2004–2010
                   Ph.D USTC
                    </br></br>2010–2012   Postdoctal </br> Tsinghua University
                    </br></br>2012–2014   Postdoctal Research Fellows</br> Nanyang Technological University
                </li>
                <li>E-mail: hongxun@ustc.edu.cn </li>
                    */}
            </ul>
            </Col>
            </Row>
            

        </Card>
    </>
    }

}