import React from "react"
import  "@css/header.css"
import  Logo from "@images/logo.png"
export default class Header extends React.Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return <header>
            <img src={Logo} alt="USTC logo"/>
            <h1>Center of Advanced Nanocatalysis</h1>
        </header>
    }
}