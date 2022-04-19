import styled from 'styled-components';

export const Card = styled.div`
display: flex;
border: 2px palevioletred;
justify-content: center;
align-items: center;
background-color: #e7e8ea;
box-sizing: border-box;
background-clip: content-box;
z-index: 1;
transition: 200ms;


-moz-user-select: none;
-khtml-user-select: none;
user-select: none;  

-webkit-box-shadow: 1px 2px 4px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 1px 2px 4px 0px rgba(34, 60, 80, 0.2);
box-shadow: 1px 2px 4px 0px rgba(34, 60, 80, 0.2);

&:hover {
  -webkit-box-shadow: 4px 6px 8px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 4px 6px 8px 0px rgba(34, 60, 80, 0.2);
box-shadow: 4px 6px 8px 0px rgba(34, 60, 80, 0.2);
}
`;
