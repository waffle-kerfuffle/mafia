import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

import { Pic } from './Pic';
import { useLocation, NavLink } from 'react-router-dom';

export const About = () => {
  const [socketUrl, setSocketUrl] = useState('wss://ws2.arzdigital.com/');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [currencies, setCurrencies] = useState([]);
  const location = useLocation();

  sendMessage(`{"action":"coins","key":1,"page":1}`);
  useEffect(() => {
    return () => {
      if (lastMessage !== null) {
        const data = JSON.parse(lastMessage.data);

        if (data.action == 'coins') setCurrencies(data.data);
      }
    };
  }, [lastMessage, setCurrencies]);

  console.log(readyState);

  if (location.pathname == '/') {
    return (
      <section className="about-section spad rtl">
        <div className="container">
          <table className="table rtl">
            <thead>
              <tr className="text-right">
                <th>#</th>
                <th>نام</th>
                <th>(تتر)آخرین قیمت</th>
                <th>تغییر 24h</th>
                <th>تغییر هفتگی </th>
                <th>نمودار هفتگی</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {readyState == 3 ? (
                <tr>
                  <td className="shower center">
                    <button
                      onClick={window.location.reload(false)}
                      className="site-btn login"
                    >
                      تلاش مجدد
                    </button>
                  </td>
                </tr>
              ) : lastMessage == null ? (
                <tr>
                  <td>
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </td>
                </tr>
              ) : (
                currencies.slice(0, 10).map((data, i) => (
                  <tr className="text-right" key={i}>
                    <td>{data.rank}</td>

                    <td>
                      <NavLink
                        to={`/CurrencyDetail/id?id=${data.id}&name=${data.name}`}
                      >
                        <Pic id={data.rank} /> &nbsp;{data.symbol} &nbsp;{' '}
                        <span className="mute">{data.faname}</span>
                      </NavLink>
                    </td>

                    <td>{data.price}</td>
                    <th className={data.d1 > 0 ? 'up' : 'down'}>{data.d1}%</th>
                    <th className={data.d7 > 0 ? 'up' : 'down'}>{data.d7}%</th>
                    <td>
                      <img
                        src={
                          'https://cdn.nobitex.ir/charts/' +
                          data.symbol.toLowerCase() +
                          '.png'
                        }
                        width="115"
                        height="35"
                        loading="lazy"
                        alt="نمودار قیمت"
                        title="نمودار قیمت"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn btn-outline-info"
                        onClick={() => buy(data.id)}
                      >
                        خرید
                      </button>
                      <button
                        className="btn  btn-outline-danger"
                        onClick={() => sel(data.id)}
                      >
                        فروش
                      </button>
                      <button
                        className="btn  btn-outline-warning"
                        onClick={() => sel(data.id)}
                      >
                        واریز
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => sel(data.id)}
                      >
                        برداشت
                      </button>
                      <button
                        className="btn  btn-outline-secondary"
                        onClick={() => sel(data.id)}
                      >
                        انتقال
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="shower center">
            <NavLink className="site-btn login" to="/Allcurrency">
              نمایش همه بازار ها{' '}
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
  if (location.pathname == '/Allcurrency') {
    return (
      <section className="about-section spad rtl ll">
        <div className="container">
          <table className="table rtl">
            <thead>
              <tr className="text-right">
                <th>#</th>
                <th>نام</th>
                <th>(تتر)آخرین قیمت</th>
                <th>تغییر 24h</th>
                <th>تغییر هفتگی </th>
                <th>نمودار هفتگی</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((data, i) => (
                <tr className="text-right" key={i}>
                  <td>{data.rank}</td>
                  <td>
                    <Pic id={2} /> &nbsp;{data.symbol} &nbsp;{' '}
                    <span className="mute">{data.faname}</span>
                  </td>
                  <td>{data.price}</td>
                  <th className={data.d1 > 0 ? 'up' : 'down'}>{data.d1}%</th>
                  <th className={data.d7 > 0 ? 'up' : 'down'}>{data.d7}%</th>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => buy(data.id)}
                    >
                      خرید
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => sel(data.id)}
                    >
                      فروش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
};
