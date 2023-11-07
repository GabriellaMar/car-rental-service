import { Container } from "../Container/Container"
import { RentalCarBtn } from "../RentalBtn/RentalCarBtn"
// import { RentalCarBtn } from "../RentalCarBtn/RentalCarBtn"
import { Hero, HeroBtn, HeroSubtittle, HeroText, HeroTittle, TextWrapper } from "./MainSection.styled"

export const MainSection = ()=>{
    <Hero>
        <Container>
            <TextWrapper>
                <HeroTittle>Best Cars For The Best Journey</HeroTittle>
                <HeroText> Welcome to Car Rental Service!</HeroText>
                <HeroSubtittle>We Provide Best Cars With The Best Prices. We Make Your Drive Memorable </HeroSubtittle>
                <HeroSubtittle> Enjoy Your Holiday With Us</HeroSubtittle>
                < RentalCarBtn />
            </TextWrapper>
        </Container>
    </Hero>
}