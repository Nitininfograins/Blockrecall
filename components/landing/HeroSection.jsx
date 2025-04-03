import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HeroSection() {
  //   function explorer() {
  //     window.open("https://slicescan.io/", "_blank");
  //   }

  function explorer() {
    window.open("https://hekla.taikoscan.io/", "_blank");
  }

  function document() {
    window.open(
      "http://3.134.18.64/?orgId=1&from=now-3h&to=now&timezone=browser&var-datasource=P623EFAF6A3784606&var-instance=$__all&var-quantile=0.5&refresh=10s",
      "_blank"
    );
  }
  return (
    <>
      <section className="heroSection">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="content_area_wrapper">
                <div className="content_container">
                  <div className="tag_line">Powered by blockchain</div>
                  <h1>The Most Anticipated Blockchain Network</h1>
                  <p>
                    The world's first decentralized and permissionless ecosystem
                    offers the Blockchain stream various opportunities and
                    innovations, attracting developers, innovators, artists,
                    businesses, and other stakeholders. B L O C K R E C A L L
                    offers a number of communities to join, develop, and grow.
                  </p>
                  <div className="action_btn_group">
                    <button onClick={explorer}>Deploy a Contract</button>
                    <button onClick={document}>Run a BlockRecall node</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
