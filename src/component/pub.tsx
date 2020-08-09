import React from "react";

interface IPub{
    number:number;
    title:string;
    imgsrc:string;
    websrc:string;
    source:string;
    authors:string;
    abstruct?:string;
}

export default class Publication extends React.Component<IPub>  {
    constructor (props:IPub)
    {
        super(props);
    }

    render(){
        return <div id={this.props.number.toString()}>
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