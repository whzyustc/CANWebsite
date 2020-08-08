import React from "react"
import '@css/nav.css'
let menuTitles=['homepage','focus','application','publications','members','facilites','album'];
let menuLinks=['index.html','focus.html','application','publications.html','members.html','facilites.html','album.html']

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