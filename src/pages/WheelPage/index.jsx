import React, { useState, useEffect } from 'react';
import { Container,Snowflake } from './WheelPage.styles';
import { Link } from "react-router-dom";

import Wheel from '../../components/Wheel';
import SharedModal from '../../components/Modal';
import logo from '../../assets/logo.png';

const WheelPage = () => {
    const snowflakes = 60; // 雪花的數量
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [award , setAward] = useState('');
    const [awardCode , setAwardCode] = useState('');

    const cpoyCode = ()=>{
      navigator.clipboard.writeText(awardCode).then(() => {
        setIsCopied(true)
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }

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
      <Wheel setAward={setAward} setAwardCode={setAwardCode} setAddModalOpen={setAddModalOpen}></Wheel>
      {addModalOpen && (
            <SharedModal id={"bb"} title={"恭喜抽中"} >
                            <div className=' flex flex-col'>
                            <span className='text-3xl my-5 font-bold text-slate-800'>{award}</span>
                            <span className='pt-5 text-md text-slate-800'>
                              折扣券號碼：{awardCode}<br/>
                            </span>
                            <span className='p-5 text-sm text-slate-800'>{
                              awardCode=="bpmcmgmbp2023"?
                              "請記得將中獎號碼截圖或是複製到聊天室中，我們會為您處理後續寄送作業唷！":
                              "折扣券可在官方商城購物車中輸入，請記得複製或抄下您的折扣券號碼喔！"
                            }
                            </span>
                            <button className='p-5 text-sm text-slate-800' onClick={cpoyCode}>{isCopied ? "已複製":"點我複製折扣碼"}</button>
                            <Link to={`/`}>
            <button className="rounded-lg m-2 p-2 bg-black text-white text-base font-bold hover:bg-slate-800 transition duration-100">
                回到首頁
            </button></Link>
                            </div>
            </SharedModal>
                )}
        </Container>
    );
}

export default WheelPage;
