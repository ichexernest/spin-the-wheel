import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
color: #fff;
`;

// 雪花下落的動畫
const snowfall = keyframes`
0% { transform: translateY(-100vh); }
100% { transform: translateY(100vh); }
`;

// 雪花組件
export const Snowflake = styled.span`
position: absolute;
top: -10vh;
color: white;
font-size: ${props => props.size}px;
opacity: 0.6;
user-select: none;
animation: ${snowfall} linear ${props => props.duration}s infinite;
animation-delay: ${props => props.delay}s;
`;