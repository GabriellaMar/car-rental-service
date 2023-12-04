import styled from 'styled-components';




export const LogoImg = styled.img`
    width: 70px;
    height: 70px;
    padding-left: 5px;
`
export const LogoStyledWrapper = styled.div`
     position: ${(props) => (props.absolutePosition ? 'absolute' : 'relative')};
    top: -16px;
    width: 100px;
    position: relative;

`
export const LogoText = styled.p`
    
    font-family: 'Manrope', sans-serif;
    font-weight:700;
    font-size: 18px;
    color: var(--blue);
    cursor: pointer;
    text-transform: uppercase;
    /* text-shadow: 2px 2px 6px rgba(219, 218, 218, 0.872); */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover,
    &:focus {
        text-shadow: 2px 2px 6px rgba(219, 218, 218, 0.872); 
    }
    
span {
    color: #e7e4e4f4;
}

   
`
export const StyledWrapper = styled.div`
    position: absolute;
bottom: 5px;
left: -8px;  
  
`