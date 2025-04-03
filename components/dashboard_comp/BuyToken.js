import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyToken = () => {
  return <></>;
  // const [walletAddress, setwalletAddress] = useState("");
  // const [SliceToken, setSliceToken] = useState("");
  // const [saleStage, setSaleStage] = useState("");
  // const [isPaused, setIsPaused] = useState("");
  // const [cookies, setCookie, removeCookie] = useCookies(["walletAdddress"]);
  // const [privateTokenPrice, setPrivateTokenPrice] = useState("");
  // const [publicTokenPrice, setPublicTokenPrice] = useState("");
  // const [ethTotalTokenPrice, setETHTotalTokenPrice] = useState(0);
  // const [weiTotalTokenPrice, setWeiTotalTokenPrice] = useState(0);
  // useEffect(() => {
  //   const web3_Stake = new Web3(window.ethereum);
  //   // const SliceTokenABiWthiCONTRACT = new web3_Stake.eth.Contract(
  //   //   SliceTOKEN_Abi,
  //   //   SliceTOKEN_CONTACT_ADDRESS
  //   // );
  //   const StakingUnstakingABiWthiCONTRACT = new web3_Stake.eth.Contract(
  //     STAKINGUNSTAKING_Abi,
  //     STAKINGUNSTAKING_CONTACT_ADDRESS
  //   );
  //   $(".validate").focus(function () {
  //     $("#SliceTokenCheck").hide();
  //   });
  //   SliceTokenABiWthiCONTRACT.methods
  //     .isPaused()
  //     .call()
  //     .then(async function (isPaused) {
  //       setIsPaused(isPaused);
  //     })
  //     .catch((err) => {});
  //   SliceTokenABiWthiCONTRACT.methods
  //     .stage()
  //     .call()
  //     .then(async function (check_stage) {
  //       setSaleStage(check_stage);
  //     })
  //     .catch((err) => {});
  //   SliceTokenABiWthiCONTRACT.methods
  //     .perTokenPrivatePrice()
  //     .call()
  //     .then(async function (privateTokenPrice) {
  //       setPrivateTokenPrice(privateTokenPrice);
  //     })
  //     .catch((err) => {});
  //   SliceTokenABiWthiCONTRACT.methods
  //     .perTokenPublicPrice()
  //     .call()
  //     .then(async function (publicTokenPrice) {
  //       var eth_publicTokenPrice = Web3.utils.fromWei(
  //         publicTokenPrice,
  //         "ether"
  //       );
  //       setPublicTokenPrice(publicTokenPrice);
  //     })
  //     .catch((err) => {});
  // }, []);
  // const buyTokenFun = async () => {
  //   document.getElementById("overlay").style.display = "block";
  //   if (!SliceToken) {
  //     $("#SliceTokenCheck").show();
  //   }
  //   if (isPaused == "true" || isPaused == true) {
  //     toast.error("Sale not started !", {
  //       position: "top-center",
  //       theme: "colored",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     setSliceToken("");
  //     setETHTotalTokenPrice(0);
  //   } else {
  //     if (SliceToken) {
  //       SliceTokenABiWthiCONTRACT.methods
  //         .purchaseToken(SliceToken)
  //         .send({
  //           from: walletAddress,
  //           value: weiTotalTokenPrice,
  //         })
  //         .on("error", function (error) {
  //           // console.log("error", error)
  //           toast.error("Buy token failed !", {
  //             position: "top-center",
  //             theme: "colored",
  //             autoClose: 2000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //           });
  //           document.getElementById("overlay").style.display = "none";
  //           setSliceToken("");
  //           setETHTotalTokenPrice(0);
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 2000);
  //         })
  //         .then(async function (info) {
  //           document.getElementById("overlay").style.display = "none";
  //           toast.success("Buy token successfully !", {
  //             position: "top-center",
  //             theme: "colored",
  //             autoClose: 2000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //           });
  //           setSliceToken("");
  //           setETHTotalTokenPrice(0);
  //           document.getElementById("overlay").style.display = "none";
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 2000);
  //         });
  //     }
  //   }
  // };
  // const getTokenPrice = () => {
  //   $("#SliceTokenCheck").hide();
  //   if (saleStage == 0) {
  //     var weiTotalTokenPrice = SliceToken * privateTokenPrice;
  //   } else {
  //     var weiTotalTokenPrice = SliceToken * publicTokenPrice;
  //   }
  //   setWeiTotalTokenPrice(weiTotalTokenPrice);
  //   var ethTotalTokenPrice = Web3.utils.fromWei(
  //     weiTotalTokenPrice.toString(),
  //     "ether"
  //   );
  //   setETHTotalTokenPrice(ethTotalTokenPrice);
  // };
  // useEffect(() => {
  //   $("#SliceTokenCheck").hide();
  //   let walletAddress = cookies.walletAdddress;
  //   setwalletAddress(walletAddress);
  // }, []);
  // return (
  //   <>
  //     <section className="mainDash_wrap">
  //       <div id="overlay">
  //         <div className="loader_spiner">
  //           <ImSpinner7 />
  //           <div className="loader_text">
  //             <strong>Please wait while complete your processing...</strong>
  //           </div>
  //         </div>
  //       </div>
  //       <section className="buyToken_wrap">
  //         <div
  //           className="content-wrapper farm-pg-ctnt mt-5"
  //           style={{ minHeight: "461px" }}
  //         >
  //           <div className="container">
  //             <div className="row hm-main-cnt">
  //               <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
  //                 <div className="home-box aos-init aos-animate">
  //                   <div className="card-body">
  //                     <h2 className="card-title text-center"> Buy</h2>
  //                     {/* <!-- <div className="row">
  //                           <div className="col-md-12">
  //                               <div className="title">
  //                                   <b>Note : 1 GROL = 0.00003 BNB</b>
  //                               </div>
  //                           </div>
  //                       </div> --> */}
  //                     <input
  //                       type="hidden"
  //                       name="stage"
  //                       className="stage"
  //                       value=""
  //                     />
  //                     <input
  //                       type="hidden"
  //                       name="isPaused"
  //                       className="isPaused"
  //                       value=""
  //                     />
  //                     <div className="stack-box">
  //                       <div className="row">
  //                         <div className="col-md-12">
  //                           <label>Slice Token:</label>
  //                         </div>
  //                         {/* <!--         <div className="col-7  col-md-7">
  //                                   <label>BNB:</label>
  //                               </div> --> */}
  //                         <div className="col-md-12">
  //                           <input
  //                             className="form-control"
  //                             id="inp_amount"
  //                             type="number"
  //                             name="grol_token"
  //                             autoComplete="off"
  //                             value={SliceToken}
  //                             placeholder="Slice Token"
  //                             onKeyUp={getTokenPrice}
  //                             onChange={(e) => setSliceToken(e.target.value)}
  //                           />
  //                           <p className="text-danger" id="SliceTokenCheck">
  //                             Please Enter Number of Slice token{" "}
  //                           </p>
  //                         </div>
  //                         <div className="col-md-12">
  //                           <label>ETH:</label>
  //                         </div>
  //                         <div className="col-md-12">
  //                           <input
  //                             className="form-control"
  //                             type="text"
  //                             readOnly
  //                             id="SliceToken_amt"
  //                             placeholder="ETH Amount"
  //                             value={ethTotalTokenPrice}
  //                           />
  //                         </div>
  //                         <div className="col-12 col-md-12 mt-2">
  //                           <button
  //                             type="submit"
  //                             className="btn connect btn-block"
  //                             onClick={buyTokenFun}
  //                             id="showBuyBtn"
  //                           >
  //                             Buy
  //                           </button>
  //                           {/* <!-- <button type="submit" className="btn connect btn-block" id="hideBuyBtn">Buy</button> --> */}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <ToastContainer
  //         position="bottom-right"
  //         autoClose={1000}
  //         hideProgressBar={false}
  //         newestOnTop={false}
  //         closeOnClick
  //         rtl={false}
  //         pauseOnFocusLoss
  //         draggable
  //         pauseOnHover
  //       />
  //     </section>
  //   </>
  // );
};

export default BuyToken;
