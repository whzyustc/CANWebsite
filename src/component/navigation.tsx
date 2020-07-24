import React from "react"

let menulist=['homepage','focus','publications','members','facilites','album'];

export default class Navigation extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return <nav>
            <ul id="menu">
                {menulist.map((item,index)=><li key={index} id={item}><a href={item+'.html'} title={item}>{item.toUpperCase()}</a></li>)}
            </ul>
        </nav>
    }
}