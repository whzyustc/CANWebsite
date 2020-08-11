import React from "react";

import { Row, Col ,Divider,Card} from "antd";
import Meta from "antd/lib/card/Meta";

export class Facilities extends React.Component{
    constructor(props:any)
    {
        super(props);
    }

    render (){
        return (
            <>
            <Divider orientation="left">Facilities</Divider>
        <Card className="facilitiespage" hoverable>
            <Divider orientation="left">Owned facilities</Divider>
            <Row className="album" id="ownedfacilities" gutter={16} align="top" justify="space-around">
                
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/tem.png" />}><Meta title="HITACHI HT7700" description="Tramsmission Electron Microscope"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/xrd.png" />}><Meta title="Rigaku Miniflex600" description="X-ray Diffraction"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/fs.png"  />}><Meta title="HITACHI F-4600" description="Fluorescence Spectrophotometer"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/sapa.png" />}><Meta title="micromeritics ASAP 2020 HD88 PLUS" description="Surface Area and Porosity Analyzer"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/gc2010.png" />}><Meta title="SHIMAOZU GC2010 Plus" description="Gas Chromatograph"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/uvvis.png" />}><Meta title="SHIMADZU UV-3600" description="UV-VIS-NIR Spectrophotometer"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/gcms.png" />}><Meta title="Agilent Technologies  7890A GC System <br \>Agilent Technologies 5975C inert XL MSD" description="GC-MS"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/gsl.png" />}><Meta title="Tube furnace" description="Tube furnace"/></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/eleche.png" />}><Meta title="CHE760e" description="Electrochemical workstation"/></Card></Col>
            </Row>
        </Card>
        <Card  hoverable>
            <Divider orientation="left">Graduation 2017</Divider>
            <Row className="album" id="graduation" gutter={16} align="top" justify="space-around">
                
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/coorp1.png" />}><Meta title="Cs-corrected STEM" /></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/coorp2.png" />}><Meta title="Synchrotron radiation light source " /></Card></Col>
                <Col className="albumrow" span={8}><Card hoverable cover={<img src="images/coorp3.png" />}><Meta title="Battery testing system" /></Card></Col>
            </Row>
        </Card>
        </>
        )
    }
}