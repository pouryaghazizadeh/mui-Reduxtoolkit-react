import { Link } from "react-router-dom";
import styled from "styled-components"


export const Nav = styled.nav`
  width: 100vw;
  height: 80px;
  background: #fefefe;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const TitleNav = styled(Link)`
  font-size: xx-large;
  text-decoration: none;
  color: #1e1f25;
  position: absolute;
  left: 10px;
cursor: pointer;

`;



export const BoxIconShope = styled(Link)`
  font-size: 40px;
  /* background: red; */
  height: 60px;
  width: 50px;
  padding-top: 10px;
  color: #1e1f25;
`;
export const ContainerIcon = styled.section`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberProduct = styled.span`
background: green;
width: 25px;
height:25px;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:8px ;

`