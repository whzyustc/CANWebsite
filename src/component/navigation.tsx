import React from "react"

let menuTitles=['homepage','focus','publications','members','facilites','album'];
let menuLinks=['index.html','focus.html','publications.html','members.html','facilites.html','album.html']

export default class Navigation extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return <nav>
            <ul id="menu">
                {menuTitles.map((item,index)=><li key={index} id={item}><a href={menuLinks[index]} title={item}>{item.toUpperCase()}</a></li>)}
            </ul>
        </nav>
    }
}