import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
export default function Ecosystem() {
  return (
    <>
      <section className="ecosystem">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="head">
                <FaQuoteLeft />
                <h2>
                  Join the fastest-growing ecosystem in crypto across DeFi,
                  Web3, and NFTs
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="content_row">
            <Col lg={6} md={12} sm={12}>
              <div className="box_wrapper one">
                <div className="box">
                  <h6>B L O C K R E C A L L Community</h6>
                  <p>
                    It's a vibrant global community powered by B L O C K R E C A
                    L LChain. B L O C K R E C A L L empowers community members
                    to work together and create valuable B L O C K R E C A L
                    LHub.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="box_wrapper two">
                <div className="box">
                  <h6>Become a Validator</h6>
                  <p>
                    Validators form the Backbone of B L O C K R E C A L L
                    network. By processing transactions and participating in
                    consensus, apiece validator helps make it great B L O C K R
                    E C A L L blockchain network globally.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="box_wrapper three">
                <div className="box">
                  <h6>Learn about B L O C K R E C A L L</h6>
                  <p>
                    Learn more about B L O C K R E C A L LChain and see what
                    makes it great.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="box_wrapper four">
                <div className="box">
                  <h6>Developer Resources</h6>
                  <p>
                    Welcome to the most exciting and innovative platform This
                    documentation provides Developer Resources details on the B
                    L O C K R E C A L L technology.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
