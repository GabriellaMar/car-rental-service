// import logoImg from '../../images/logo.png'
// import { LogoImg, LogoStyledWrapper, LogoText, StyledWrapper } from './Logo.styled'

// export const Logo = () => {
//     return (
//         <>
//             <LogoStyledWrapper>
//                 <LogoImg src={logoImg}></LogoImg>
//                 <StyledWrapper>
//                     <LogoText>Rent <span>CAR</span></LogoText>
//                 </StyledWrapper>
//             </LogoStyledWrapper>
//         </>
//     )
// }
import logoImg from '../../images/logo.png';
import { LogoImg, LogoStyledWrapper, LogoText, StyledWrapper } from './Logo.styled';

export const Logo = ({ absolutePosition }) => {
  return (
    <LogoStyledWrapper absolutePosition={absolutePosition}>
      <LogoImg src={logoImg}></LogoImg>
      <StyledWrapper>
        <LogoText>Rent <span>CAR</span></LogoText>
      </StyledWrapper>
    </LogoStyledWrapper>
  );
};