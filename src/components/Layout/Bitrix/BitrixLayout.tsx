import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BXHeader } from './BitrixHeader';
import { BXFooter } from './BXFooter';
import { BXLeftAsside } from './BXLeftAsside';
import { BXRightAsside } from './BXRightAsside';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
`;

const Center = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto 64px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const ButtonBox = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
`;

const ToolBarContainer = styled.div`
    width: 100%;
    height: 73px;
    background-color: #e7e8ea;
`;

function BitrixLayout({ children } : {
    children: ReactNode
}) {
  return (
    <Wrapper>
      <BXHeader />
      <Center>
        <BXLeftAsside />
        <Content>
          <ButtonBox />
          {children}
        </Content>
        <BXRightAsside />
      </Center>
      <BXFooter />
    </Wrapper>
  );
}

export default BitrixLayout;
