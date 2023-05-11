/** @format */

import React from "react";
import {
  Bigpic,
  Buywrapper,
  Definition,
  Features,
  LocWrapper,
  Smalldef,
  Table,
  Word,
  Wrapper,
} from "./styled";
import building from "../../Assets/img/building.png";

const Home = () => {
  return (
    <Wrapper>
      <Definition>
        <Word>Find the perfect place to stay with your family</Word>
        <Smalldef>
          Buying a home is a life-changing experience, so shouldn’t your real
          estate agent be a life changer.
        </Smalldef>
        <Table>
          <Buywrapper>
            <Features>Buy</Features>
            <Features>Rent</Features>
            <Features>Sell</Features>
          </Buywrapper>
          <LocWrapper>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
          </LocWrapper>
        </Table>
      </Definition>
      <Bigpic>
        <img src={building} />
      </Bigpic>
    </Wrapper>
  );
};
export default Home;
