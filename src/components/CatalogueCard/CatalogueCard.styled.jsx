import styled from 'styled-components';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';

export const CarInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
 `

export const CardWrapper = styled.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `

export const CarModelWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`
export const CarInfoList = styled.ul`
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
 `
export const CardButton = styled.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: #FFFFFF;
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`

export const ImageWrapper = styled.div`
   position: relative;
   margin-bottom: 14px;
   /* object-fit: cover; */
   width: 100%;
   /* width: 274px; */
   

`
export const CarImg = styled.img`
display: block;
   border-radius: 13px;
   max-width: 274px;
   /* max-height: 100%; */
    height: 268px; 
   
`
export const CarModelTittle = styled.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: var(--black)

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
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--heart-white);
   
  
`

export const StyledIconBlue = styled(LiaHeartSolid)`
  display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`