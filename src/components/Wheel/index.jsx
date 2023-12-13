import React, { useState, useEffect } from 'react';
import { Container, SpinBtn, WheelArea, Number } from './Wheel.styles';
import { Link } from "react-router-dom";
import SharedModal from '../Modal';

const Wheel = () => {
    const [val, setVal] = useState(0);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const [award , setAward] = useState('');
    const [awardCode , setAwardCode] = useState('');

    const [isSpinning, setIsSpinning] = useState(false); // 新增一個狀態來控制旋轉狀態
    const prizes = ['聖誕限定禮盒', '折扣券50元', '折扣券100元', '折扣券50元', '折扣券500元', '折扣券50元', '折扣券100元', '折扣券50元'];
    const prizesCode = ['bpmcmgmbp2023', 'mcgmcps012023', 'mcgmcpb012023', 'mcgmcps012023', 'mcgmcpg012023', 'mcgmcps012023', 'mcgmcpb012023', 'mcgmcps012023'];
    const weights = [3, 15, 16, 15, 5, 15, 16, 15]; // 總和為100

    const cpoyCode = ()=>{
      navigator.clipboard.writeText(awardCode).then(() => {
        setIsCopied(true)
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });

    }
    const weightedRandom=(weights) =>{
        const totalWeight = weights.reverse().reduce((acc, cur) => acc + cur, 0);
        let random = Math.random() * totalWeight;
        for (let i = 0; i < weights.length; i++) {
          if (random < weights[i]) {
            return i; // 返回區域索引
          }
          random -= weights[i];
        }
      }
      

    const handleSpinClick = () => {
        setIsSpinning(true); // 開始旋轉時鎖定按鈕
        const prizeIndex = weightedRandom(weights);
        const anglePerSection = 360 / weights.length;
        const randomAngle = 3600 + (prizeIndex * anglePerSection) + (anglePerSection / 2);
        setVal(randomAngle);
    };

    useEffect(() => {
        if (val !== 0) {
            const timer = setTimeout(() => {
                const degreesPerSection = 360 / prizes.length;
                const resultIndex = Math.floor((360 - (val % 360))/ degreesPerSection) % prizes.length;
                //alert(`The result is: ${prizes[resultIndex]}`);
                setAward(prizes[resultIndex]);
                setAwardCode(prizesCode[resultIndex]);
                setAddModalOpen(true);
                setIsSpinning(false); // 旋轉結束後解鎖按鈕
                setVal(0); // 重置轉盤
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [val, prizes]);

    return (
        <Container >
            <SpinBtn onClick={!isSpinning ? handleSpinClick : null}>{isSpinning ? '旋轉中' : '點我開始'}</SpinBtn>
            <WheelArea v={val}  animate={isSpinning}>
                {prizes.map((prize, index) => (
                    <Number key={index} i={index + 1} clr={index%2 ==0?'#fff': "#800010"} fclr={index%2 ==0?'#800010':"#fff"}>
                        <span>{prize}</span>
                    </Number>
                ))}
            </WheelArea>
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

export default Wheel;
