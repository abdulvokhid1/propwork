/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-left: 227px;
  margin-right: 227px;
  height: 615px;
  background-color: aliceblue;
  margin-top: 76px;
`;
const Definition = styled.div`
  display: flex;
  flex-direction: column;
  width: 558px;
  position: relative;
`;
const Smalldef = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: flex-end;
  color: #030a1b;
`;
const Word = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 61px;
  line-height: 120%;
  color: #030a1b;
`;
const Bigpic = styled.div``;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 842px;
  height: 141px;
  background-color: red;
`;
const Buywrapper = styled.div`
  display: flex;
`;
const Features = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: flex-end;
  color: #030a1b;
  margin-left: 40px;
`;
const LocWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export {
  LocWrapper,
  Wrapper,
  Features,
  Definition,
  Bigpic,
  Word,
  Smalldef,
  Table,
  Buywrapper,
};
