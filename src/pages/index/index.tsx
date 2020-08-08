import React from 'react';
import ReactDOM from 'react-dom';

import Header from '@component/header';
import Navigation from '@component/navigation';
import './index.css'
import Footer from "@component/footer";
class MainPage extends React.Component{
    constructor(props:any){
        super(props);
    }
    render()
    {
        return <>
            <Header />  
            <Navigation />
            <Footer />
        </>
    }

}

ReactDOM.render(
    <MainPage />,
    document.getElementById("contain")
);

