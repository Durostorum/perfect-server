import React from "react";
import Youtube from "react-youtube";
import AddButton from "../Carlos/addButton";
import { Col, Row, Container } from "../Grid";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "../Carousel/Carousel.css";

function Corousel(props) {
  return (
    <div>
      <MDBCol>
        <Row></Row>

        <MDBCard className="cardone">
          <MDBCardBody className="cardbody">
            <MDBCardText>
              <div className="bd-example">
                <div>
                  {props.result.map((item, index) => (
                    <div
                      key={`slide-${index}`}
                      className={`carousel-item ${
                        index === props.currentSlide && "active"
                      }`}
                    >
                      <Col size="md-12">
                        <span id="course-name">
                          Top Features for :<h4> {props.courseName}</h4>
                        </span>
                      </Col>
                      <Youtube
                        className="youtube"
                        videoId={item.videoId}
                        alt="..."
                      />

                      <div className="container carosel-container">
                        <div class="row">
                          <div className="col col-md-2">
                            <MDBIcon
                              className="arrow-icons"
                              onClick={props.onPrevious}
                              icon="angle-left"
                            />
                          </div>
                          <div className="col col-md-2">
                            <h5 className="item-name">{item.item}</h5>
                          </div>
                          <div className="col col-md-2">
                            <MDBIcon
                              className="arrow-icons"
                              onClick={(event) => {
                                props.onNext();
                              }}
                              icon="angle-right"
                            />
                          </div>
                          <div className="col col-md-2">
                            <AddButton
                              classname="addbtn"
                              id={item._id}
                              value={item}
                              addToCart={props.addToCart}
                            />
                          </div>
                        </div>
                      </div>
                      <span className="p">{item.description}</span>

                      <MDBBtn
                        className="peach-gradient"
                        onClick={(event) => {
                          props.next();
                        }}
                      >
                        Next Category
                      </MDBBtn>
                    </div>
                    // ArrowButtons(item)
                  ))}
                </div>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}

export default Corousel;
