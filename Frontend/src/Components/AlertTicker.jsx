import React from "react";

const AlertTicker = () => {
  return (
    <div style={{ backgroundColor: "yellow", overflow: "hidden", whiteSpace: "nowrap" }}>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "1.1rem",
          padding: "10px 0",
        }}
      >
        Be aware of the fake website{" "}
        <a
          href="https://jashpur.nic.in/notice/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" ,wordSpacing: "30px", textDecorationLine:"none"}}
        >
          https://jashpur.nic.in/notice/ https://jashpur.nic.in/notice/ https://jashpur.nic.in/notice/ https://jashpur.nic.in/notice/ https://jashpur.nic.in/notice/
        </a>{" "}
        The Livelihood College in Jashpur, Chhattisgarh helps young people gain the skills and knowledge needed to find employment or start a business. The college offers free training in various trades.
      </marquee>
    </div>
  );
};

export default AlertTicker;