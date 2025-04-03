import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteLogo from "../../public/images/block-recall.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { GoArrowSmallRight } from "react-icons/go";
import { useCookies } from "react-cookie";
import UseLogo from "./brand/page";
// import Router from 'next/router'
export default function Header() {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === "/dashboard") {
      router.push("/dashboard/buyToken");
    }
  }, []);

  // ======================== Mobile Menu Animation Start===============================
  const [BodyState, setBodyState] = useState(false);
  function toggleMenu() {
    setBodyState(!BodyState);

    document.getElementsByClassName("mobile")[0].classList.toggle("active");
    document.getElementsByClassName("bars")[0].classList.toggle("one");
    document.getElementsByClassName("bars")[1].classList.toggle("two");
    document.getElementsByClassName("bars")[2].classList.toggle("three");
    document
      .getElementsByClassName("menu_toggle_box")[0]
      .classList.toggle("fix");
    document.getElementById("main_header").classList.toggle("bg_color");
  }

  useEffect(() => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = BodyState ? "fixed" : "relative";
  }, [BodyState]);

  function close() {
    document.getElementsByClassName("menu_toggle_box")[0].click();
  }
  // ======================== Mobile Menu Animation End===============================

  // =========================================== Cookies For Logged User Start===================================
  // const [cookies, setCookie, removeCookie] = useCookies(['site-cookie']);
  // const [UserState, setUserState] = useState(false)
  // useEffect(() => {
  //     setCookie('logged_user', 12)
  //     console.log("test cookie", cookies.logged_user);
  //     if (cookies.logged_user) {
  //         console.log('true');
  //         setUserState(true)
  //     } else {
  //         console.log('false');
  //         setUserState(false)
  //     }
  // }, [])
  // =========================================== Cookies For Logged User End===================================

  return (
    <>
      <div className="main_navigation" id="main_header">
        <div className="main_site_logo">
          <Link href="/" className="navbar-brand site_logo">
            <UseLogo logoSize={"lg"} />
          </Link>
        </div>
        <ul className="navigation_all_links">
          {/* <li ><Link href={"/request_a_demo"} className='main_li'>Request a Demo</Link></li> */}
          <li>
            <a className="main_li">
              Build <RiArrowDropDownLine />
            </a>
            <ul className="dropdown">
              <li>
                <Link href={""}>Solutions</Link>
              </li>
              <li>
                <Link href={""}>Bridge</Link>
              </li>
              <li>
                <Link
                  // href={"https://docs.taiko.xyz/start-here/getting-started"}
                  href={""}
                >
                  Documentation
                </Link>
              </li>
              <li>
                {" "}
                <a href={""} _target>
                  Slice.network
                </a>
              </li>
              <li>
                {" "}
                <a href={""} _target>
                  blockscan.io
                </a>
              </li>
              <li>
                {" "}
                <a href={""} _target>
                  blockscan.net
                </a>
              </li>
              <li>
                {" "}
                <a href={""} _target>
                  blockscannow.xyz
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="main_li">
              Explore <RiArrowDropDownLine />
            </a>
            <ul className="dropdown">
              <li>
                <Link href="/diamond-industry">Ecosystem</Link>
              </li>
              <li>
                <Link href="/diamond-industry">Status</Link>
              </li>
              <li>
                <Link href="/oil-and-gas-industry">Blog</Link>
              </li>
              <li>
                <Link href="/oil-and-gas-industry">Grant</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="main_li"
              href="https://Slice-ledger.gitbook.io/b l o c k r e c a l l/api"
              target={"_blank"}
            >
              Contribute
            </a>
            <ul className="dropdown">
              <li>
                <Link href="/Slice_wallet">About Us</Link>
              </li>
              <li>
                <Link href="/Slice_extension">Brand Kit</Link>
              </li>
              <li>
                <Link href={"/Slice_extension"}>Careers</Link>
              </li>
            </ul>
          </li>
          {/* <li ><Link className='main_li' href={"/wallet"}>Wallet</Link></li> */}
          <li>
            <a className="main_li">
              Engage <RiArrowDropDownLine />
            </a>
            <ul className="dropdown">
              <li>
                <Link href="/Slice_wallet">trailblazers</Link>
              </li>
              <li>
                <Link href="/Slice_extension">Snaefellnft</Link>
              </li>
              <li>
                <Link href={"/Slice_extension"}>Taikoons</Link>
              </li>
            </ul>
          </li>
        </ul>

        <button className="menu_toggle_box" onClick={toggleMenu}>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
        </button>
      </div>

      {/* =================================== Mobile ===================================== */}
      <div className="mobile">
        <ul className="">
          {/* <li className='main_li'><Link href={"/request_a_demo"} onClick={close}>Request a Demo</Link></li> */}
          <li className="main_li">
            <a>
              Research <RiArrowDropDownLine />
            </a>
          </li>
          <li className="main_li">
            <a>
              Enterprise <RiArrowDropDownLine />
            </a>
          </li>
          <li className="main_li">
            <a
              href="https://Slice-ledger.gitbook.io/b l o c k r e c a l l/api"
              target={"_blank"}
            >
              Developers
            </a>
          </li>

          <li className="main_li">
            <a
              href="https://Slice-ledger.gitbook.io/b l o c k r e c a l l/"
              target={"_blank"}
            >
              Docs
            </a>
          </li>
          <li className="main_li">
            <Link href="/blog" onClick={close}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
