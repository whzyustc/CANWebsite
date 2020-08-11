import React from "react";
import {Card,Divider} from 'antd'
import * as pubObj from './publicationInfo.json';

const pubArr=pubObj["default"];

console.log(pubObj);

pubArr.map((value:any,index:number)=>{
    
  pubArr[index].imgsrc=importimg(pubArr[index].imgsrc);
})
function importimg(name:string)
{
  //return require('@images/'+name);
  return 'images/'+name;
}

export interface IPub{
    number:number;
    title:string;
    imgsrc:any;
    websrc:string;
    source:string;
    authors:string;
    abstruct?:string;
}

export interface IPublications{
    arr:IPub[];
}
export class Publications extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return (
         <>   
         
            <Divider orientation="left">Publications</Divider>
            {pubArr.map((value:any,index:number)=><Publication key={index} {...value}></Publication>)}
        </>
        )
    }

}

export  class Publication extends React.Component<IPub>  {
    constructor (props:IPub)
    {
        super(props);
    }

    render(){
        return (
        <Card hoverable className="pubcard" style={{margin:"1em 0 1em 0"}}>
            <img className={"pubimg"} src={this.props.imgsrc}/>
            <ul className={"infobox"}>
                <li className={"title"}><a href={this.props.websrc} target="blank">{this.props.title}</a></li>

                <li className={"author"}>{this.props.authors}</li>
                <li className={"source"}>{this.props.source}</li>
                <li className="no">No.{this.props.number}</li>
            </ul>
        </Card>
        )
    }
}