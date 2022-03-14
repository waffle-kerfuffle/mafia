import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import TradeViewChart from 'react-crypto-chart';
import callAPI from './utils';
import img3 from '../img/blog/2.jpg';
import * as QuerString from 'query-string';
import { useParams, useNavigate } from 'react-router-dom';
export const CurrencyDetail = () => {
  const params = QuerString.parse(location.search);
  const name = params.name.toLowerCase();

  useEffect(() => {
    fetchData().then((chartData) => {
      initChart(chartData);
      setLatestPrice(
        parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2)
      );
    });
  }, []);

  const fetchData = async () => {
    let data = { index: [], price: [], volumes: [] };
    let result = await callAPI(
      'https://api.coingecko.com/api/v3/coins/' +
        name +
        '/market_chart?vs_currency=usd&days=1&interval=1m'
    );
    for (const item of result.prices) {
      data.index.push(item[0]);
      data.price.push(item[1]);
    }
    for (const item of result.total_volumes) data.volumes.push(item[1]);
    return data;
  };

  const initChart = (data) => {
    let trace_price = {
      name: 'Price ($)',
      x: data.index.map((t) => new Date(t)),
      y: data.price,
      xaxis: 'x',
      yaxis: 'y1',
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue', size: 3 },
    };
    let trace_volumes = {
      name: 'Volumne ($B)',
      x: data.index.map((t) => new Date(t)),
      y: data.volumes,
      xaxis: 'x',
      yaxis: 'y2',
      type: 'bar',
      barmode: 'relative',
      marker: {
        color: 'rgb(49,130,189)',
        opacity: 0.7,
      },
    };
    let layout = {
      autosize: true,
      height: '100%',
      margin: {
        l: 50,
        r: 20,
        t: 35,
        pad: 3,
      },
      showlegend: false,
      xaxis: {
        domain: [1, 1],
        anchor: 'y2',
      },
      yaxis: {
        domain: [0.1, 1],
        anchor: 'x',
      },
      yaxis2: {
        showticklabels: false,
        domain: [0, 0.1],
        anchor: 'x',
      },
      grid: {
        roworder: 'bottom to top',
      },
    };
    let config = { responsive: true };
    let series = [trace_price, trace_volumes];
    Plotly.newPlot('chart', series, layout, config);
  };
  const { id } = useParams();

  const url = 'wss://ws2.arzdigital.com/';
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);
  const [currenciedet, setCurrencies] = useState([]);

  useEffect(() => {
    sendMessage(
      `{"action":"coin","key":` + params.id + `,"cid":` + params.id + `}`
    );
  }, [readyState]);

  useEffect(() => {
    return () => {
      if (lastMessage !== null) {
        const data = JSON.parse(lastMessage.data);

        setCurrencies(data.data);
      }
    };
  }, [lastMessage]);
  return (
    <div>
      <section className="page-info-section">
        <div className="container">
          <div className="site-beradcamb"></div>
        </div>
      </section>
      <section className="blog-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-item bi-feature">
                    <figure className="blog-thumb">
                      <div id="chart" className="p-0 m-0"></div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 sideber pt-5 pt-lg-0">
              <div className="widget-area">
                <h4 className="widget-title">{currenciedet.price}</h4>
                <p>
                  Receive our newsletter to stay on top of the latest posts.
                </p>
                <form className="widget-subscribe-from">
                  <input type="text" placeholder="Enter your email" />
                  <button className="site-btn sb-full-- sb-gradients">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
