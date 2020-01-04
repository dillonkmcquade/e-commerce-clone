import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: block;
  min-height: 50px;
  padding-top: 15px;
  padding-left: 40px;
`;
export const TitleContainer = styled(Link)`
  font-family: "Amatic SC", cursive;
  width: 250px;
  text-shadow: 1px 1px 1px black;
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-size: 40px;
`;

export const ButtonsContainer = styled.div`
  width: auto;
  height: 1;
  display: flex;
  padding: 15px;
`;
