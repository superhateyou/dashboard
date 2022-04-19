import styled from 'styled-components';

export const MenuBtn = styled.button`
margin: 0 10px;
cursor: pointer;
user-select: none;
text-transform: none;
font-weight: 550;
color: rgb(83, 91, 105);
font: "OpenSans-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif;
border-radius: 13px;
border: 1px solid rgb(198, 205, 211);
font-size: 13px;
height: 26px;
display: flex;
align-items: center;
justify-content: center;

transition: 100ms;

animation: 0.1s show ease-in-out;

@keyframes show {
  from { opacity: 0; }
  to { opacity: 0.50; }
}

&:hover {
  background-color: rgb(207, 212, 216);
}
`;
