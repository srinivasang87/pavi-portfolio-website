import React, {useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import MyNavBar from '../MyNavBar';

import "./TimeTravel.css";

import img1 from "../images/Fashion-Design/TimeTravel/0_d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.webp";
import img1Big from "../images/Fashion-Design/TimeTravel/0_big_d01fe9_93598e5b6f4042df961f3b1a55e5a62a~mv2_d_4200_3300_s_4_2.webp";
import img2 from "../images/Fashion-Design/TimeTravel/1_d01fe9_8b9d065484cb48c5a2186a76c1e5580a~mv2_d_4200_3300_s_4_2.webp";
import img3 from "../images/Fashion-Design/TimeTravel/2_d01fe9_eaf5471c63884b60af1d7988e5cf2fcd~mv2_d_4200_3300_s_4_2.webp";
import img4 from "../images/Fashion-Design/TimeTravel/3_d01fe9_21ffef0563104f4d8566573c88ddf70b~mv2_d_4200_3300_s_4_2.webp";
import img5 from "../images/Fashion-Design/TimeTravel/4_d01fe9_a1bf9c4c8640469b9bb8c7fdeaaccc61~mv2_d_4206_3305_s_4_2.webp";
import img6 from "../images/Fashion-Design/TimeTravel/5_d01fe9_7ac1a014b5544551981e7f84f8650340~mv2_d_4200_3300_s_4_2.webp";
import img7 from "../images/Fashion-Design/TimeTravel/6_d01fe9_98d75fdd14fc4f91969982c8c2e7450a~mv2_d_2325_2836_s_2.webp";
import img8 from "../images/Fashion-Design/TimeTravel/7_d01fe9_4fccd3ac4de147faad2e232041c6cf55~mv2_d_4200_3300_s_4_2.webp";
import img9 from "../images/Fashion-Design/TimeTravel/8_d01fe9_525a310ec7e948838f7293326ceab490~mv2_d_4200_3300_s_4_2.webp";
import img10 from "../images/Fashion-Design/TimeTravel/9_d01fe9_20be3406bdc64d0caf1b2d2ee6f2a443~mv2_d_4200_3300_s_4_2.webp";
import img11 from "../images/Fashion-Design/TimeTravel/10_d01fe9_e635fbf91a2f4f1ba86dd1dd8556e094~mv2_d_4200_3300_s_4_2.webp";
import img12 from "../images/Fashion-Design/TimeTravel/11_d01fe9_d6b903c40bec4483b09908dc49262df7~mv2_d_4200_3300_s_4_2.webp";
import MyModal from '../MyModal';


const TimeTravel = () => {
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState("");

  return (<div>
    <MyNavBar activeNavLink="fashiondesign" />
    <div className="timetravel-container">
      
      <Carousel slide={false}>
          <Carousel.Item>
            <Row>
                <Col className="col-4 md-auto" onClick={() => { setShow(true); console.log(img1Big); setModalImg({img1});  } }>
                <img src={img1} className="img-fluid" alt="..." />
                </Col>
                <div className="w-100 d-block d-sm-none"></div>
                <div className="w-100 d-block d-sm-none"></div>
                <Col className="col-4 md-auto">
                <img src={img2} className="img-fluid" alt="..." />
                </Col>
                <div className="w-100 d-block d-sm-none"></div>
                <div className="w-100 d-block d-sm-none"></div>
                <Col className="col-4 md-auto">
                <img src={img3} className="img-fluid" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col className="col-4">
                <img src={img4} className="d-block w-100" alt="..." />
                </Col>
                <Col className="col-4">
                <img src={img5} className="d-block w-100" alt="..." /> 
                </Col>
                <Col className="col-4">
                <img src={img6} className="d-block w-100" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col className="col-4">
                <img src={img7} className="d-block w-100" alt="..." />
                </Col>
                <Col className="col-4">
                <img src={img8} className="d-block w-100" alt="..." /> 
                </Col>
                <Col className="col-4">
                <img src={img9} className="d-block w-100" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
                <Col className="col-4">
                <img src={img10} className="d-block w-100" alt="..." />
                </Col>
                <Col className="col-4">
                <img src={img11} className="d-block w-100" alt="..." /> 
                </Col>
                <Col className="col-4">
                <img src={img12} className="d-block w-100" alt="..." /> 
                </Col>
            </Row>
          </Carousel.Item>
      </Carousel>
  </div>

  <Modal
        show={show}
        onHide={() => {setShow(false); setModalImg(""); }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Fashion Design | Time Travel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImg} className="d-block w-100"/>
        </Modal.Body>
      </Modal>
  </div>)
};

export default TimeTravel;