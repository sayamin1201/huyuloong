import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './wave.css';

const Wave = () => {
  const navigate = useNavigate();

  const showTopbar =() =>{
    navigate("/topbar");
  }
  return (
    <div className = "wavecontainer">
      <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="social-icon">
        <li style={{ '--clr': "#1877f2"}}>
            <a href="#">
              <i className="fa-brands fa-qq"></i>
            </a>
          </li>
          <li style={{ "--clr" : "#05df05"}}>
            <a href="#">
              <i className="fa-brands fa-weixin"></i>
            </a>
          </li>
          <li style={{"--clr":"#a33494"}}>
            <a href="#">
              <i className="fa-brands fa-bilibili"></i>
            </a>
          </li>
          <li style={{"--clr":"#020c1a;"}}>
            <a href="#">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </li>
      </div>
      <div className="menu">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">分类</a>
        </li>
        <li>
          <a href="#">官网</a>
        </li>
        <li>
          <a href="#">邮箱</a>
        </li>
      </div>
      <p>©huyulong | huyulong2000@qq.com</p>
    </footer>
    </div>
  );
};

export default Wave;