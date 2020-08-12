import React from "react";
import {Card,Divider,} from "antd";
import { Link } from "react-router-dom";

export class Focus extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
    return (<>
        <Divider orientation="left">Focus</Divider>
        <Card hoverable cover={<img src="images/focus1.png" />}></Card>
        <Card hoverable cover={<img src="images/focus2.png" />}></Card>
        <Card hoverable cover={<img src="images/focus3.png" />}></Card>
        </>)
    }

}