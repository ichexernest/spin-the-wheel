import React, { useState, useEffect } from 'react';
import { Container, Snowflake } from './Home.styles';
import { Link } from "react-router-dom";
import SharedModal from '../../components/Modal';
import logo from '../../assets/logo.png';

const Home = () => {
    const snowflakes = 60; // 雪花的數量
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAwardOpen, setModalAwardOpen] = useState(false);
    const [gainedAward, setGainedAward] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    const [cookies, setCookies] = useState("yetPlaying");
  
    const checkAuth = () => {
      return cookies == "played" ? false : true;
    //return cookies == "played" ? true : false;

    }
    
    const cpoyCode = ()=>{
        navigator.clipboard.writeText(awardCode).then(() => {
          setIsCopied(true)
          console.log('Text copied to clipboard');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
  
      }


    const toggleModal = (event) => {
        setModalOpen(!modalOpen);
      };

    const toggleModalAward = (event) => {
        setModalAwardOpen(!modalAwardOpen);
      };

    useEffect(()=>{
        setGainedAward(['折扣券50元','mcgmcps012023'])
    },[]);

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
            <span className=' mb-28'> 馬上參加聖誕幸運轉盤，就有機會獲得各種優惠券，以及聖誕限定禮盒！</span>
            {checkAuth() ? 
                <Link to={`/Wheel`}><button className='my-3 p-4 text-2xl bg-slate-100 text-slate-800 rounded-md'>開始遊戲</button></Link>
                :<button onClick={toggleModalAward} className='my-3 p-4 text-2xl bg-slate-100 text-slate-800 rounded-md'>查看結果</button>
            }
            <button data-type="a" onClick={toggleModal} className='my-3 p-4 text-2xl bg-slate-100 text-slate-800 rounded-md'>活動說明</button>

            {modalOpen && (
            <SharedModal id={"aa"} title={"活動說明"}>
                <div className=' flex flex-col'>
                <span className='p-5 text-md text-slate-800'>
                本聲明旨在明確規範本活動之的參與條件、規則及相關權益事宜。<br/>
                本活動由中樞生技股份有限公司（以下簡稱“主辦方”）主辦。<br/>
                參與者需同意並遵守本聲明書所有條款及條件。<br/>
                活動時間：從 2023/12/15 至 2023/12/25。<br/>
                參與者須在活動期間內完成，一個帳號有遊玩一次機會。<br/>
                任何違反活動規則的行為將導致參與者失去參與資格。<br/>
                免責聲明：<br/>
                主辦方不對任何技術故障、網絡中斷或系統故障負責。<br/>
                主辦方保留隨時修改、暫停或終止本活動的權利，無需另行通知。<br/>
                本活動不受任何與主辦方無關的第三方機構的影響或控制。<br/>
                法律聲明：<br/>
                本活動及其規則受 [相關法律法規，例如：XX國家/地區法律] 管轄與解釋。<br/>
                參與者參加本活動即表示同意接受這些條款和條件的約束。<br/>
                聯繫方式：<br/>
                如有任何問題或需要協助，歡迎聯繫我們。<br/>
                </span>
                <button data-type="a" onClick={toggleModal} className="rounded-lg m-2 p-2 bg-slate-800 text-white text-base font-bold hover:bg-slate-800 transition duration-100">
                    確認
                </button>
                </div>
            </SharedModal>
    )}
                {modalAwardOpen && (
            <SharedModal id={"bb"} title={"恭喜抽中"} >
            <div className=' flex flex-col'>
            <span className='text-3xl my-5 font-bold text-slate-800'>{gainedAward[0]}</span>
            <span className='pt-5 text-md text-slate-800'>
              折扣券號碼：{gainedAward[1]}<br/>
            </span>
            <span className='p-5 text-sm text-slate-800'>{
              gainedAward[1]=="bpmcmgmbp2023"?
              "請記得將中獎號碼截圖或是複製到聊天室中，我們會為您處理後續寄送作業唷！":
              "折扣券可在官方商城購物車中輸入，請記得複製或抄下您的折扣券號碼喔！"
            }
            </span>
            <button className='p-5 text-sm text-slate-800' onClick={cpoyCode}>{isCopied ? "已複製":"點我複製折扣碼"}</button>
            <button data-type="a" onClick={toggleModalAward} className="rounded-lg m-2 p-2 bg-slate-800 text-white text-base font-bold hover:bg-slate-800 transition duration-100">
                    確認
                </button>
            </div>
</SharedModal>
    )}
        </Container>
    );
}

export default Home;
