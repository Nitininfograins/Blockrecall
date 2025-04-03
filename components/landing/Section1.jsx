import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Icon from "../../public/images/landing/dummy_icon.svg";
import SectionImg from "../../public/images/landing/blockchain-01.png";
import UseLogo from "../common/brand/page";
export default function Section1() {
  return (
    <>
      <section className="section1">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="image_side">
                <Image src={SectionImg.src} alt="blockchain" fluid />
              </div>
            </Col>
            <Col lg={6}>
              <div className="content_side_wrapper">
                <div className="content">
                  <h2>
                    {" "}
                    <UseLogo logoSize={"lg"} />
                  </h2>
                  <p>
                    B L O C K R E C A L L Blockchain is a public,
                    permissionless, Ethereum Virtual Machine (EVM) compatible
                    blockchain running on the world’s leading Proof-of-Stake and
                    Proof-of-play consensus mechanism. The B L O C K R E C A L L
                    blockchain is open to the public, allowing participants from
                    around the world to join in to secure and verify the record
                    reflect accurate state of affairs.
                  </p>
                  <Row>
                    <Col lg={6}>
                      <div className="inner_content">
                        <Image src={Icon.src} fluid />
                        <p>Constant reviews and testing of our platform</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="inner_content">
                        <Image src={Icon.src} fluid />
                        <p>Your funds are as secure as possible</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="inner_content">
                        <Image src={Icon.src} fluid />
                        <p>Fully decentralized and non-custodial</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="inner_content">
                        <Image src={Icon.src} fluid />
                        <p>Built by seasoned crypto veterans</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
