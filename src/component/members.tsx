import React from "react";
import {Card,Divider,Row,Col} from "antd";
import * as memarr from '@component/membersinfo.json';
import Meta from "antd/lib/card/Meta";
console.log("postdoctor",memarr["postdoctor"].length);
console.log("doctor",memarr["doctor"].length);
console.log("postgraduate",memarr["postgraduate"].length);
console.log("alumni",memarr["alumni"].length)
function imgpath(path:string){
    let i=path.indexOf('images');
    return path.substr(i);
}

interface memberinfo{
    "imgsrc": string;
    "name": string,
    "namepinyin": string,
    "graduation": string,
    "jointime": string,
    "email": string;
}

export class Members extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return (
            <>
            <Divider orientation="left">Members</Divider>
            <MemberGroup groupmember={memarr["postdoctor"]} groupname={"postdoctor"}></MemberGroup>
            <MemberGroup groupmember={memarr["doctor"]} groupname={"doctor"}></MemberGroup>
            <MemberGroup groupmember={memarr["postgraduate"]} groupname={"postgraduate"}></MemberGroup>
            <MemberGroup groupmember={memarr["alumni"]} groupname={"alumni"}></MemberGroup>
            </>
        )
    }
}

class MemberGroup extends React.Component<{groupname:string,groupmember:memberinfo[]}>{
    constructor(props:any)
    {
        super(props);
    }

    render(){
        return <Card hoverable className="memberpage">
            <Divider orientation="left">{this.props.groupname}</Divider>
                <Row className="memberrow" id="ownedfacilities" gutter={16} align="top" justify="space-around"> 
                
                
            {this.props.groupmember.map(
                (value,index)=><Col className="membercol" span={8}><Card hoverable cover={<img src={imgpath(value.imgsrc)} style={{marginBottom:"2em"}}/>} >
                    <Meta 
                    title={value.name} 
                    description={<ul>
                        <li className="pinyin">{value.namepinyin} </li>
                        <li className="jointime">{value.jointime}</li>
                        <li className="graduation">{value.graduation}</li>
                        </ul>}>

                        </Meta>
                    </Card>
                    </Col>
                )}
            </Row>
        </Card>
    }

}