import React from "react";
import Youtube from "react-youtube";
import AddButton from "../Carlos/addButton";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "../Carousel/Carousel.css";
import Detail from "../../Pages/MainPage/index";

function Corousel(props) {
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "32") {
      props.next();
    } else if (e.keyCode == "37") {
      props.onPrevious();
    } else if (e.keyCode == "39") {
      props.onNext();
    }
  }
  return (
    <div>
      <MDBCol>
        <MDBCard className="cardone" style={{ width: "50rem" }}>
          <MDBCardBody className="cardbody">
            <MDBCardText>
              <div className="bd-example">
                <div className="carousel-inner">
                  {props.result.map((item, index) => (
                    <div
                      key={`slide-${index}`}
                      className={`carousel-item ${
                        index === props.currentSlide && "active"
                      }`}
                    >
                      {console.log("It" + item.item)}

                      <Youtube
                        videoId={item.videoId}
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="row offset-4">
                        <MDBIcon
                          className="addicon"
                          onClick={props.onPrevious}
                          icon="angle-left"
                        />
                        <h5 className="item-name">{item.item}</h5>

                        <MDBIcon
                          className="addicon"
                          onClick={(event) => {
                            props.onNext();
                          }}
                          icon="angle-right"
                        />
                        <AddButton
                          className="addicon"
                          id={item._id}
                          value={item}
                          addToCart={props.addToCart}
                        />
                      </div>
                      <p className="p">{item.description}</p>

                      <MDBBtn
                        className="ctg-btn"
                        onClick={(event) => {
                          props.next();
                        }}
                      >
                        Next Category
                      </MDBBtn>
                    </div>
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
