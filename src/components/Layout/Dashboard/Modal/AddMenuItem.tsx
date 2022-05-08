/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

export const Wrap = styled.div<{color: string}>`
width: 100px;
height: 100px;
display: block;
margin: 10px;
display: flex;
justify-content: center;
align-items: center; 
background-color: #e7e8ea;
box-shadow: ${(props) => (props.color === 'green' ? '2px 6px 8px 2px lightgreen' : '2px 6px 8px 2px rgba(34, 60, 80, 0.2)')};
box-sizing: border-box;
transition: 200ms;
color: black;
z-index: 5;
pointer-events: none;

-moz-user-select: none;
-khtml-user-select: none;
user-select: none;  
`;

function AddMenuItem(item, color) {
  return (
    <Wrap color={item.color}>
      {item.children}
    </Wrap>

  );
}

export default AddMenuItem;
