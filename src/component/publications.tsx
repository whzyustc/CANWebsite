import React from "react";
import * as pubarr from './publicationInfo.json';

interface IPub{
    number:number;
    title:string;
    imgsrc:string;
    websrc:string;
    source:string;
    authors:string;
    abstruct?:string;
}

interface IPublications{
    arr:IPub[];
}
export class Publications extends React.Component<IPublications>{
    constructor(props:IPublications)
    {
        super(props);
    }
    pubgenerator(arr:any):any{
        let ans=[];
        for (let i in arr)
        {
            ans.push(<Publication key={i} {...arr[i]} />);
        }
        return ans;
    }

    render (){
        return <div className="publications">

            {this.pubgenerator(pubarr)}
        </div>
    }

}

export  class Publication extends React.Component<IPub>  {
    constructor (props:IPub)
    {
        super(props);
    }

    render(){
        return <div >
            <img className={"img"} src={this.props.imgsrc}/>
            <ul>
                <li className={"title"}><a href={this.props.websrc}>{this.props.title}</a></li>

                <li className={"author"}>{this.props.authors}</li>
                <li className={"source"}>{this.props.source}</li>
                <li className="no">No.{this.props.number}</li>
            </ul>
        </div>
    }
}