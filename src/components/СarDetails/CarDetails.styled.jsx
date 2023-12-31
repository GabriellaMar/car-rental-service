
import styled from 'styled-components';

export const ModalWindow = styled.div`
`
export const CarImage = styled.img`
width: 100%;
margin-bottom: 14px;
`
export const CarModalTittle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`


export const CarModalList = styled.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `

 export const CarModalItem = styled.li`
    color: var(--text-color);
 `

 export const CarInfoTittle = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `
 export const CarDescription = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `
 export const CarDescriptionList= styled.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `

 export const CarDescriptionItem = styled.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `

 export const CarFunctionality = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-color);
 `
 