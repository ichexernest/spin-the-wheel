import React, { useState, useEffect } from 'react';
import { Container, SpinBtn, WheelArea, Number } from './Wheel.styles';
import { useCookies } from 'react-cookie';

const Wheel = ({setAward, setAwardCode,setAddModalOpen}) => {
    const [val, setVal] = useState(0);

    const [isSpinning, setIsSpinning] = useState(false); // 新增一個狀態來控制旋轉狀態
    const prizes = ['聖誕限定禮盒', '折扣券50元', '折扣券100元', '折扣券50元', '折扣券500元', '折扣券50元', '折扣券100元', '折扣券50元'];
    const prizesCode = ['bpmcmgmbp2023', 'mcgmcps012023', 'mcgmcpb012023', 'mcgmcps012023', 'mcgmcpg012023', 'mcgmcps012023', 'mcgmcpb012023', 'mcgmcps012023'];
    const weights = [3, 15, 16, 15, 5, 15, 16, 15]; // 總和為100
    const [cookies, setCookie] = useCookies(['pInfo']);

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
                setCookie('pInfo', `${prizes[resultIndex]},${prizesCode[resultIndex]}`);
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
        </Container>
    );
}

export default Wheel;
