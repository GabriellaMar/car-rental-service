import styled from 'styled-components';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';

export const CarInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
 `

export const CardWrapper = styled.li`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
    /* box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25); */
 `

export const CarModelWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`
export const CarInfoList = styled.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`

export const CarInfoItem = styled.li`

  color: var(--text-black);
 color: rgba(229, 225, 225, 0.5);
 `
export const CardButton = styled.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996);
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`

export const ImageWrapper = styled.div`
   position: relative;
   margin-bottom: 14px;
   width: 100%;
`
export const CarImg = styled.img`
   display: block;
   border-radius: 13px;
   max-width: 274px;
   height: 268px; 
   
`
export const CarModelTittle = styled.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgba(243, 240, 240, 0.996);
  

   span {
      color:  var(--blue);
    }
`
export const StyledBtn = styled.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`


export const StyledIcon = styled(LiaHeart)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`

export const StyledIconBlue = styled(LiaHeartSolid)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`