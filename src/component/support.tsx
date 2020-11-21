import React from "react";
import { Row, Col ,Divider,Card,Image} from "antd";

export class Support extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return (
            <>
            <Divider orientation="left">Support</Divider>
            <Card id="Win10 Jade Install">
                
                <h3>Install Jade on new Win10</h3>
                
                <Image src={require ('@images/jadedownload.png')}/>

                <h3>Download and unzip ocx files into system folder</h3>
                
                <Image src={require('@images/unzipocxfiles')} />

                <h3>Open powershell as administrator</h3>

                <Image src={require('@images/openpowershell')} />

                <h3>Register ocx files</h3>

                <Image src={require('@images/registerocx')} />
            </Card>
            </>
        )
    }

}