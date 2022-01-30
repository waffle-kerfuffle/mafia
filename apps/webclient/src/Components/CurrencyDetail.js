import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import TradeViewChart from 'react-crypto-chart';
import callAPI from './utils';
import img3 from "../img/blog/2.jpg";
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
			
			<div className="site-beradcamb">
      {currenciedet.price}
			
			</div>
		</div>
	</section>
    <section className="blog-page spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="row">
					
						<div className="col-md-12">
							<div className="blog-item bi-feature">
								<figure className="blog-thumb">
                <div id="chart" className="p-0 m-0"></div>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 jan 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">This Week in Bitcoin: Up, Down and Sideways</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
									<p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
									<a href="" className="readmore">Readmore <i className="fa fa-angle-double-right"></i></a>
								</div>
							</div>
						</div>
					
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="img/blog/1.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 dec 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">Blockchain Rolls Out Trading Feature for 22 States in the U.S</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
				
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="img/blog/3.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">28 aug 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">This Week in Bitcoin: Up, Down and Sideways</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
				
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="img/blog/4.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 jan 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">Indians Expect Clarity on Bitcoin Taxes within Days</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
					
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="../img/blog/5.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 dec 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">Thailand Taking Steps to Regulate ICOs</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
				
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="img/blog/6.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 jan 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">Discover Card’s 44 Million Customers Denied Crypto</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
				
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="blog-thumb">
									<img src="img/blog/7.jpg" alt=""/>
								</figure>
								<div className="blog-text">
									<div className="post-date">22 dec 2018</div>
									<h4 className="blog-title"><a href="single-blog.html">Wall Street Price Manipulation? Go Long</a></h4>
									<div className="post-meta">
										<a href=""><span>by</span> Admin</a>
										<a href=""><i className="fa fa-heart-o"></i> 234 Likes</a>
										<a href=""><i className="fa fa-comments-o"></i> 08 comments</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="post-loadmore site-btn sb-gradients sbg-line mt-5">LOAD MORE</button>
				</div>
				<div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
					<div className="widget-area">
						<h4 className="widget-title">News Letter</h4>
						<p>Receive our newsletter to stay on top of the latest posts.</p>
						<form className="widget-subscribe-from">
							<input type="text" placeholder="Enter your email"/>
							<button className="site-btn sb-full-- sb-gradients">Subscribe</button>
						</form>
					</div>
					<div className="widget-area">
						<div className="widget">
							<h4 className="widget-title">Categories</h4>
							<ul>
								<li><a href="#">Prediction markets</a></li>
								<li><a href="#">Storage</a></li>
								<li><a href="#">Token exchange</a></li>
								<li><a href="#">Computation</a></li>
								<li><a href="#">Identity</a></li>
								<li><a href="#">ICOs</a></li>
							</ul>
						</div>
						<div className="widget">
							<h4 className="widget-title">Popular Posts</h4>
							<ul className="popular-posts">
								<li>
									<span>22 dec 2018</span>
									<h5><a href="">Lightning and Mainnet: A Look at the Protocol’s Hype, Trials, and Error</a></h5>
								</li>
								<li>
									<span>22 dec 2018</span>
									<h5><a href="">This Week in Bitcoin: Japan Gets Goxxed and Iota Gets Into a Tangle</a></h5>
								</li>
								<li>
									<span>22 dec 2018</span>
									<h5><a href="">Bitcoin Futures Report Shows Bullish Sentiment Is In the Air</a></h5>
								</li>
								<li>
									<span>22 dec 2018</span>
									<h5><a href="">Why Venezuela’s New National Cryptocurrency El Petro Will Fail</a></h5>
								</li>
							</ul>
						</div>
						<div className="widget">
							<h4 className="widget-title">Recent Tweets</h4>
							<ul className="twitter-widget">
								<li>
									<h5>Why Does The Bitcoin Price Move So Much?</h5>
									<a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
									<span>4 days ago</span>
								</li>
								<li>
									<h5>How Can I Trade Bitcoin without an Exchange?</h5>
									<a href="https://t.co/MSQVkamNwa">https://t.co/MSQVkamNwa</a>
									<span>4 days ago</span>
								</li>
							</ul>
						</div>
						<div className="widget">
							<h4 className="widget-title">Follow Us</h4>
							<div className="social">
								<a href="" className="facebook"><i className="fa fa-facebook"></i></a>
								<a href="" className="google"><i className="fa fa-google-plus"></i></a>
								<a href="" className="instagram"><i className="fa fa-instagram"></i></a>
								<a href="" className="twitter"><i className="fa fa-twitter"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
     
     
    </div>
  );
};
