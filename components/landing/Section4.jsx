import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SectionImg from "../../public/images/landing/blockchain-01.png";
import UseLogo from "../common/brand/page";
// import Image from 'next/image'

export default function Section4() {
  function guide() {
    window.open(
      "https://Slice-ledger.gitbook.io/b l o c k r e c a l l/developer-guide",
      "_blank"
    );
  }
  return (
    <>
      <section className="section4">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="content_side_wrapper">
                <div className="content">
                  <h2>
                    {" "}
                    <UseLogo logoSize={"lg"} /> Build Limitless dApps
                  </h2>
                  <p>
                    B L O C K R E C A L LChain is built for the next generation
                    of apps that enables developers to build scalable
                    user-friendly dApps with low transaction fees without ever
                    sacrificing security.
                  </p>
                  <p>
                    B L O C K R E C A L L is creating the best network for Web3
                    developers with flexible deployment, seamless
                    interoperability, and incredible on-chain incentives.
                  </p>
                  <button onClick={guide}>Developer Guide</button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image_side">
                <Image src={SectionImg.src} fluid alt="blockchain" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
