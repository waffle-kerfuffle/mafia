import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { Pic } from "./Pic";


export const About = () => {
  const url = "wss://ws2.arzdigital.com/";
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    sendMessage(`{"action":"fiats","key":1}`);
    sendMessage(`{"action":"coins","key":1,"page":1}`);
  }, [readyState]);
  useEffect(() => {
    return () => {
      console.log(currencies);
      if (lastMessage !== null) {
        const data = JSON.parse(lastMessage.data);
        console.log(data);
        if (data.action == "coins") setCurrencies(data.data);
      }
    };
  }, [lastMessage]);

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
            {currencies.map((data) => (
              <tr className="text-right" key={data.id}>
                <td>{data.rank}</td>
                <td>
                  <Pic id={2} /> &nbsp;{data.symbol} &nbsp;{" "}
                  <span className="mute">{data.faname}</span>
                </td>
                <td>{data.price}</td>
                <th className={data.d1 > 0 ? "up" : "down"}>{data.d1}%</th>
                <th className={data.d7 > 0 ? "up" : "down"}>{data.d7}%</th>
                <td>
                  
                </td>
                <td>
                  <button className="btn btn-outline-info">خرید</button>
                  <button className="btn btn-outline-danger">فروش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <nav className="Page navigation" aria-label="...">
          <ul className="pagination justify-content-center">
          <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
    
    </section>
  );
};
