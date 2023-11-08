import styled from 'styled-components';

export const CarModalBtn = styled.a`
display: inline-block;
padding: 12px 50px;
background-color: var(--blue);
color: var(--white);
border-color: transparent;
border-radius: 12px;
margin-top: 16px;

&:hover,
&:focus {
background-color: var(--hover-blue);
}
`