import { ContactText, ContactTitle, ContactWrapper, EmailIcon, FooterWrapper, TelIcon, CarImg,FooterContentWrapper } from "./Footer.styled"
import footerCar from '../../images/CardCars/footerBmw.png'
import { Container } from "../Container/Container"
import { Logo } from "../Logo/Logo"
export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContentWrapper>
                    <Logo />
              <CarImg src ={footerCar} alt ='bmw car'/>
            <ContactWrapper>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactText><TelIcon /> +38 (097) 111 11 11</ContactText>
                <ContactText><EmailIcon /> info@CarRentalServise.com</ContactText>
            </ContactWrapper>
            </FooterContentWrapper>
            </Container>
        </FooterWrapper>
    )
}