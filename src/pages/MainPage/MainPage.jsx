import { Container } from "../../components/Container/Container.jsx";
import { Hero, HeroRentalBtn, TextWrapper, StyledTextWrapper, HeroSubtittle, HeroText, HeroTittle } from "./MainPage.styled.jsx";



const MainPage = () => {
    return (
        <Hero>
            <Container>
                <TextWrapper>
                    <HeroTittle>Best Cars For The Best Journey</HeroTittle>
                    <HeroText> Welcome to Car Rental Service!</HeroText>
                    <StyledTextWrapper>
                        <HeroSubtittle>We Provide Best Cars With The Best Prices. We Make Your Drive Memorable </HeroSubtittle>
                        <HeroSubtittle> Enjoy Your Holiday With Us</HeroSubtittle>
                    </StyledTextWrapper>
                    <HeroRentalBtn href="tel:+380730000000">Rental car</HeroRentalBtn>
                </TextWrapper>
            </Container>
        </Hero>
    )
}

export default MainPage;