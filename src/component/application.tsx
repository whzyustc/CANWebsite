import React from "react";
import { Card,Divider} from "antd";
import { Link } from "react-router-dom";

export class Application extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
    return (<>
        <Divider orientation="left">Application :
        <Link to={"www.linkeway.com"} >www.linkeway.com</Link></Divider>
        <Card hoverable cover={<img src="images/nongye.png" />}></Card>
        <Card hoverable cover={<img src="images/nengyuan.png" />}></Card>
        <Card hoverable cover={<img src="images/yiliao.png" />}></Card>
        <Card hoverable cover={<img src="images/huanbao.png" />}></Card>
        </>)
    }

}