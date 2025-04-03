import React, { useState } from "react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import sidebg from "../../public/images/SliceIndex/sidebg2.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
const IndexBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [btnLoader, setBtnLoader] = useState(false);
  const onSubmit = (data) => {
    setBtnLoader(true);
    const bodyFormData = {
      email: data.email,
    };
    axios({
      method: "post",
      url: "https://b l o c k r e c a l l.io/backend/api/emailSubscribe",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        reset();
        setBtnLoader(false);
        toast.success("Thank you for contact us");
      })
      .catch(function (response) {});
  };
  return (
    <>
      <section className="indexBanner_wrap">
        <div
          id="home_section"
          className="section_banner small_pb blue_light_bg"
          data-z-index="1"
          data-parallax="scroll"
          data-image-src="assest/website/images/banner_bg2.png"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                <div className="banner_text text_md_center">
                  <h1
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.1s"
                  >
                    <span style={{ color: "#a30b9d" }}>Slice</span> Invest in
                    Slice Tokens & Be A Successful Investor By Earning A Huge
                    Profit.
                  </h1>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    Slice token is specifically developed for Slice Ledger
                    Blockchain Protocol. It is used for on-chain governance,
                    transaction fee payment, and network security for the B L O
                    C K R E C A L L Chain.
                  </p>
                  <div className="newsletter_form pb-4">
                    <form
                      className="subscribe_form animation"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        className="input-rounded"
                        type="email"
                        placeholder="Enter Email Address"
                        {...register("email", {
                          required: "Email is Required",
                          pattern: {
                            value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/my,
                            message: "Invalid Email Address",
                          },
                        })}
                      />
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                      <button
                        type="submit"
                        title="Subscribe"
                        className="btn-info"
                        name="submit"
                        value="Submit"
                      >
                        {btnLoader ? (
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        ) : (
                          "Subscribe"
                        )}
                      </button>
                    </form>
                  </div>
                  <span
                    className="text-white icon_title animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    Follow us :
                  </span>
                  <ul className="list_none social_icon">
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.6s"
                    >
                      <a
                        href="https://www.facebook.com/B L O C K R E C A L L"
                        target="_blank"
                      >
                        <i>
                          <FaFacebookF />
                        </i>
                      </a>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.7s"
                    >
                      <a href="https://twitter.com/LedgerSlice" target="_blank">
                        <i>
                          <AiOutlineTwitter />
                        </i>
                      </a>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.8s"
                    >
                      <a
                        href="https://www.instagram.com/Slice.ledger/"
                        target="_blank"
                      >
                        <i>
                          <AiOutlineInstagram />
                        </i>
                      </a>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.9s"
                    >
                      <a
                        href="https://t.me/b l o c k r e c a l l"
                        target="_blank"
                      >
                        <i>
                          <FaTelegramPlane />
                        </i>
                      </a>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="2s"
                    >
                      <a
                        href="https://www.linkedin.com/company/Slice-ledger"
                        target="_blank"
                      >
                        {" "}
                        <i>
                          <AiFillLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                <div
                  className="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
                  data-animation-delay="1.5s"
                  data-animation="fadeInRight"
                >
                  <img alt="banner_vector2" src={sidebg.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </section>
    </>
  );
};

export default IndexBanner;
