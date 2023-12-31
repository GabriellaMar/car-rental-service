import { gsap } from "gsap";
import { CarsSliderSection } from "../../components/CarsSliderSection/CarsSliderSection.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { Services } from "../../components/Services/Services.jsx";
import { Hero, HeroRentalBtn, HeroSubtittle, HeroText, HeroTittle, TextWrapper } from "./MainPage.styled.jsx";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer.jsx";





const MainPage = ({adverts}) => {
 
    useEffect(() => {
        gsap.fromTo(".textWrapper", { 
          x: -200,
          opacity: 0,
        }, { 
          duration: 2,
          x: 0,
          opacity: 1,
        });
      }, []);
    return (
        <>
        <Hero className="Hero">
            <Container>
                 <TextWrapper className="textWrapper"> 
                    <HeroTittle>Best Cars For The Best Journey</HeroTittle>
                    <HeroText> Welcome to Car Rental Service!</HeroText>
                     {/* <StyledTextWrapper>  */}
                        <HeroSubtittle>We Provide Best Cars With The Best Prices. <br />We Make Your Drive Memorable. </HeroSubtittle>
                        <HeroSubtittle> Enjoy Your Holiday With Us</HeroSubtittle>
                   {/* </StyledTextWrapper>  */}
                 </TextWrapper> 
                 <HeroRentalBtn href="tel:+380730000000">Rental car</HeroRentalBtn>
            </Container>
        </Hero>
          <Services />
          <CarsSliderSection adverts ={adverts}/>
          <Footer />
          </>
    )
}

export default MainPage;