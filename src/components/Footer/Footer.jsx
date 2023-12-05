import { ContactText, ContactTitle, ContactWrapper, EmailIcon, FooterWrapper, TelIcon, CarImg,FooterContentWrapper } from "./Footer.styled"
import footerCar from '../../images/CardCars/footerBmw.png'
import { Container } from "../Container/Container"

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterContentWrapper>
              <CarImg src ={footerCar} alt ='bmw car'/>
            <ContactWrapper>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactText><TelIcon /> +38 (095) 111 11 11</ContactText>
                <ContactText><EmailIcon /> carRentalServise@gmail.com</ContactText>
            </ContactWrapper>
            </FooterContentWrapper>
            </Container>
        </FooterWrapper>
    )
}