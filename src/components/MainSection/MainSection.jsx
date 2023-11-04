import { Container } from "../Container/Container"
import { Hero, HeroBtn, HeroSubtittle, HeroText, HeroTittle, TextWrapper } from "./MainSection.styled"

export const MainSection = ()=>{
    <Hero>
        <Container>
            <TextWrapper>
                <HeroTittle>Best Cars For The Best Journey</HeroTittle>
                <HeroText> Welcome to Car Rental Service!</HeroText>
                <HeroSubtittle>We Provide Best Cars With The Best Prices. We Make Your Drive Memorable </HeroSubtittle>
                <HeroSubtittle> Enjoy Your Holiday With Us</HeroSubtittle>
                <HeroBtn type='button'>Rental car</HeroBtn>
            </TextWrapper>
        </Container>
    </Hero>
}