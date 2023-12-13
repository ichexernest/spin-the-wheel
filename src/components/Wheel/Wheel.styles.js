import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 330px;
height: 330px;
display: flex;
justify-content: center;
align-items: center;
`;
export const SpinBtn = styled.div`
position: absolute;
width: 80px;
height: 80px;
background: rgb(226,148,64);
background: linear-gradient(0deg, rgba(226,148,64,1) 0%, rgba(193,139,16,1) 36%, rgba(255,205,81,1) 100%);
border-radius : 50%;
z-index:10;
display: flex;
justify-content: center;
align-items: center;
text-transform : uppercase;
font-weight : bold;
color:#333;
letter-spacing 0.1em;
border: 4px solid rgba(0,0,0,.75);
cursor: pointer;
user-select : none;
&:before {
    content: '';
    position: absolute;
    top: -20px;
    width:20px;
    height:30px;
    background: rgb(241,184,44);
    background: linear-gradient(0deg, rgba(241,184,44,1) 0%, rgba(255,205,81,1) 100%);    clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
  }
`;
export const WheelArea = styled.div`
--v: ${(props) => props.v};
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #333;
border-radius: 50%;
overflow: hidden;
transform: rotate(${(props) => props.v}deg);
box-shadow: 0 0 0 5px #f1b82c,
0 0 0 10px #c99923,
0 0 0 18px #111;
transition: ${(props) => (props.animate ? 'transform 5s ease-in-out' : 'none')};
`;
export const Number = styled.div`
position: absolute;
width: 50%;
height: 50%;
background:  ${(props) => props.clr};
transform-origin: bottom right;
transform: rotate(calc(45deg * ${(props) => props.i} + 22.5deg));
clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
display: flex;
justify-content: center;
align-items: center;
user-select: none;
cursor: pointer;
span{

    position: relative;
    transform: rotate(45deg);
    font-size: 1em;
    font-weight: bold;
    color:  ${(props) => props.fclr};
`;

