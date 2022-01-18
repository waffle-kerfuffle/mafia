import {React,useEffect }from "react";
import laptop from "../img/laptop.png";
export const Hero = () => {
    // useEffect(() => {
    //     getproducts()
       
    // }, [])
  // const getproducts = () => {
  //   const apiUrl = "https://api.nobitex.ir/v2/orderbook/BTCIRT";
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then(
  //       (data) => {
  //         console.log(data);
          
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  // };
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text text-right">
              <h2>
              خرید و فروش امن  <span>بیت‌کوین</span> و ارزهای دیجیتال
                <br />
              
              </h2>
              <h4 className="float-left text-right">
              به بزرگترین بازار ارز دیجیتال ایران بپیوندید
              </h4>
              <form className="hero-subscribe-from rtl">
                <input type="text" placeholder="ایمیل خودراواردکنید" />
                <button className="site-btn sb-gradients">شروع کنید</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={laptop} className="laptop-image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
