// /* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { MenuBtn } from './styles/MenuBtn';
import { Plus } from './styles/Plus';
import { MenuIcon } from './styles/MenuIcon';

interface IBar {
  enable: boolean;
  setModalActive: any;
  editFields: any;
}

const Menu = styled.nav`
display: flex;
align-items: center;
justify-content: right;
height: 50px;
border-top: 1px solid #dce2e6;
border-bottom: 1px solid #dce2e6;
margin-bottom: 10px;
padding: 0 10px 0 10px;
`;

function MenuBar({ enable, setModalActive, editFields } : IBar) {
  return (
    <Menu>
      {enable && (
        <MenuBtn
          type="button"
          onClick={() => setModalActive(true)}
        >
          <Plus>+</Plus>
          Добавить
        </MenuBtn>
      )}
      <MenuBtn type="button" onClick={editFields}>
        <MenuIcon
          src="https://img.icons8.com/material-rounded/16/000000/settings.png"
          alt="stngs"
        />
        Настройки
      </MenuBtn>
    </Menu>
  );
}

export default MenuBar;
