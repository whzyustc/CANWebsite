import React from "react";
import { Carousel } from 'antd';
import {blue,orange,grey} from '@ant-design/colors';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    //textAlign: 'center',
    background: blue[7],
  };

export class HomepageContent extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return <div>
        <Carousel className="shadow1" autoplay>
           <div>
             <h3  style={contentStyle}></h3>
           </div>
           <div>
             <h3  style={contentStyle}></h3>
           </div>
           <div>
             <h3 style={contentStyle}></h3>
           </div>
         </Carousel>
    </div>
    }

}