import React from 'react';
import TradeViewChart from "react-crypto-chart";
export const Feauters = () => {
  return (
    <div>
      <section className="features-section spad gradient-bg">
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>ویژگی های ما</h2>
            <p>بیت کوین ساده ترین راه برای مبادله پول با هزینه بسیار کم است.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-mobile"></i>
              <div className="feature-content">
                <h4>برنامه های موبایل</h4>
                <p>
                  رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در
                  برابر هک ایمن خواهد بود{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-shield"></i>
              <div className="feature-content">
                <h4>کیف پول امن</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>
            {/* <TradeViewChart pair="BTCBUSD" />; */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-wallet"></i>
              <div className="feature-content">
                <h4>Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-headphone-alt"></i>
              <div className="feature-content">
                <h4>Experts Support</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-reload"></i>
              <div className="feature-content">
                <h4>Instant Exchange</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-panel"></i>
              <div className="feature-content">
                <h4>Recuring Buys</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{' '}
                </p>
                <a href="" className="readmore">
                  Readmore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
