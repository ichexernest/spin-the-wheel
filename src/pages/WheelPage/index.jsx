import React, { useState, useEffect } from 'react';
import { Container,Snowflake } from './WheelPage.styles';
import Wheel from '../../components/Wheel';
import logo from '../../assets/logo.png';

const WheelPage = () => {
    const snowflakes = 60; // 雪花的數量


    return (
        <Container className='relative h-screen w-screen'>
                  {[...Array(snowflakes)].map((_, index) => (
        <Snowflake 
          key={index}
          style={{ left: `${Math.random() * 100}vw` }} // 隨機水平位置
          size={Math.random() * 8 + 8} // 隨機大小 (8px - 32px)
          duration={Math.random() * 10 + 15} // 隨機動畫持續時間 (5s - 15s)
          delay={Math.random() * -20} // 隨機開始延遲 (-20s - 0s)
        >
          ❄
        </Snowflake>
      ))}
                  <img src={logo} alt="GoodMood Logo" className="w-1/3" />
            <span className="font-bold text-3xl my-3">璀璨冬日 歡喜聖誕</span>
            <span className="font-bold text-3xl mb-10">LINE會員專屬幸運轉盤</span>
      <Wheel></Wheel>
        </Container>
    );
}

export default WheelPage;
