import React from "react";
import { Row, Col ,Divider,Card} from "antd";

export class Albums extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return (
            <>

        <Divider orientation="left">Albums</Divider>
        <Card id="albums" hoverable>
            <Divider orientation="left">Barbecue 2017</Divider>
            <Row className="album" id="barbecue" gutter={16} align="top" justify="space-around">
                
                <Col className="albumrow" span={8}><img src="images/IMG_0836.png" alt="IMG_0836.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_0919.png" alt="IMG_0919.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_0922.png" alt="IMG_0922.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_0842.png" alt="IMG_0842.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_0843.png" alt="IMG_0843.png"/></Col>
            </Row>
        </Card>
            
        <Card  hoverable>
            <Divider orientation="left">Graduation 2017</Divider>
            <Row className="album" id="graduation" gutter={16} align="top" justify="space-around">
                
                <Col className="albumrow" span={8}><img src="images/IMG_3454.png" alt="IMG_3454.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_3444.png" alt="IMG_3444.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_2361.png" alt="IMG_2361.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_3468.png" alt="IMG_3468.png"/></Col>
                <Col className="albumrow" span={8}><img src="images/IMG_3501.png" alt="IMG_3501.png"/></Col>
            </Row>
        </Card>
        </>
       )
    }

}