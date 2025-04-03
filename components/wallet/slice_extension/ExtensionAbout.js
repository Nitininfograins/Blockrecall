import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SliceExtention from "../../../public/images/SliceExtention.png";
import { BsArrowUpRight } from "react-icons/bs";

const ExtensionAbout = () => {
  return (
    <>
      <section className="aboutExtension_wrap">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className="aboutExtension_content_wrap">
                <div className="aboutExtension_content_title">
                  <h4>About Product</h4>
                  <h3>
                    Slice wallet <br />
                    Extension
                  </h3>
                </div>
                <article className="aboutExtension_content">
                  <p>
                    B L O C K R E C A L L Wallet Extension is a free,
                    client-side interface helping you interact with B L O C K R
                    E C A L L Chain. Our easy-to-use, open-source platform
                    allows you to generate wallets and so much more.You can
                    create a new wallet, import an existing wallet, vote for
                    Master nodes, and transfer/receive Slice Token.
                  </p>
                  <a
                    href="https://chrome.google.com/webstore/detail/Slice/ngkboaddmfaodpbcmhnehklfbkpajbdp"
                    target={"_blank"}
                    className="btn"
                    type="button"
                  >
                    Add Extension <BsArrowUpRight />
                  </a>
                </article>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <figure className="Slice_about_img_wrap">
                <Image src={SliceExtention.src} alt="Slice About" />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ExtensionAbout;
