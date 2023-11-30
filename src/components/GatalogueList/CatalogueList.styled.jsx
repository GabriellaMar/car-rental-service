import styled from 'styled-components';
// import { Container } from '../Container/Container.jsx';
// import { CardButton } from '../CatalogueCard/CatalogueCard.styled';

export const AdvertList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
   row-gap: 30px;
   padding : 20px;
   justify-content: center;
   
`
export const LoadMoreBtn = styled.button`
   /* display: inline-block; */
    width: 200px; 
   font-size: 16px;
   font-weight: 500;
    line-height: 24px;
   padding: 13px 8px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996); 
   margin-top: 40px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
   
  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`

