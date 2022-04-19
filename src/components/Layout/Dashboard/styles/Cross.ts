import styled from 'styled-components';

export const Cross = styled.div`
opacity: 0.50;
width: 20px;
height: 20px;
justify-content: center;
align-items: center;
position: absolute;
top: 0%;
right: 7%;
cursor: pointer;
transition: 200ms;
display: block;
animation: 0.2s show ease-in-out;
transform-origin: center;

@keyframes show {
  from { opacity: 0; }
  to { opacity: 0.50; }
}

&:hover {
  transform: rotate(90deg);
}
`;
