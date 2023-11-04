import { Container } from "../../components/Container/Container.jsx";
import { MainSection } from "../../components/MainSection/MainSection.jsx";

import { Hero, HeroBtn, HeroSubtittle, HeroText, HeroTittle } from "./MainPage.styled.jsx";

const MainPage = ()=>{
    return (
       <>
       <Hero>
        <Container>
            <div>
                <HeroTittle>Best Cars For The Best Journey</HeroTittle>
                <HeroText> Welcome to Car Rental Service!</HeroText>
                <HeroSubtittle>We Provide Best Cars With The Best Prices. We Make Your Drive Memorable </HeroSubtittle>
                <HeroSubtittle> Enjoy Your Holiday With Us</HeroSubtittle>
                <HeroBtn type='button'>Rental car</HeroBtn>
            </div>
        </Container>
    </Hero>
        </>
    )
}

export default MainPage;